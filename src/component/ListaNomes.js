import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};
class ListaNomes extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { classes } = this.props;
    const { usuarios } = this.props;
    let arrayHtml = [];
    usuarios.map(usuario => {
      arrayHtml.push(
        <div
          style={{
            float: "left",
            "margin-left": "10px"
          }}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={usuario.picture.large}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {usuario.name.first + " " + usuario.name.last}
                </Typography>
                <Typography component="p">
                  {usuario.name.first +
                    " " +
                    usuario.name.last +
                    ", " +
                    usuario.gender +
                    ", " +
                    usuario.email}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Compartilhar
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    });
    return arrayHtml;
  }
}

export default withStyles(styles)(ListaNomes);
