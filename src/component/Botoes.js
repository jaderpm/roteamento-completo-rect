import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withRouter, Route } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Botoes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-left">
        {this.state.menu.map(menu => {
          return (
            <Route
              setMenu={this.setMenu}
              render={({ history }) => (
                <Button
                  color="inherit"
                  type="button"
                  onClick={that => {
                    this.setMenu.bind(this);
                    history.push(menu.endereco);
                  }}
                >
                  {menu.titulo}
                </Button>
              )}
            />
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(Botoes);
