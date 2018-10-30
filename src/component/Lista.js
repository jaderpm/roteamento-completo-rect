import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usuarios: [] };
    try {
      var setMenu = props.location.funcao.setMenu;
      setMenu(null);
    } catch (e) {}
  }

  render() {
    const { classes } = this.props;
    let arrayHtml = [];
    this.state.usuarios.map(usuario => {
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

  componentWillMount() {
    var that = this;
    debugger;
    var quantidade =
      typeof this.props.match.params.quantidade == "undefined"
        ? 5
        : this.props.match.params.quantidade;
    axios
      .get("https://randomuser.me/api/?results=" + quantidade)
      .then(function(response) {
        that.setState({ usuarios: response.data.results });
        debugger;
      });
  }
}
export default withStyles(styles)(Lista);
