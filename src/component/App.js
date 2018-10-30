import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withRouter, Route } from "react-router-dom";
import AppBarLayout from "./AppBarLayout";

let menuDefault = [
  {
    endereco: "/lista",
    titulo: "Lista de pessoas"
  },
  {
    endereco: "/comilao",
    titulo: "Verificar comilança"
  }
];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    var handleToUpdate = this.setMenu.bind(this);
    this.state = {
      menu: menuDefault
    };
  }

  setMenu(menu_) {
    if (menu_ == null) {
      menu_ = menuDefault;
    }
    debugger;
    this.setState({ menu: menu_ });
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon>Teste</MenuIcon>
            </IconButton>
            <Typography variant="h6" color="inherit" />
            <nav className="nav is-tab has-shadow">
              <div className="nav-left">
                {this.state.menu.map(menu => {
                  return (
                    <Route
                      showSearch={true}
                      render={({ history }) => (
                        <Button
                          color="inherit"
                          type="button"
                          onClick={that => {
                            history.push({
                              pathname: menu.endereco,
                              funcao: { setMenu: this.setMenu.bind(this) }
                            });
                          }}
                        >
                          {menu.titulo}
                        </Button>
                      )}
                    />
                  );
                })}
              </div>
            </nav>
          </Toolbar>
        </AppBar>
        <section className="section">
          <div className="container">{this.props.children}</div>
        </section>
      </div>
    );
  }
}
