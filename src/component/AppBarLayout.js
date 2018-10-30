import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ButtonOcurrence from "./ButtonOcurrence";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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

class AppBarLayout extends React.Component {
  aumentarContador() {
    debugger;
    this.setState({ contador: this.state.contador + 1 });
  }

  diminuirContador() {
    this.setState({ contador: this.state.contador - 1 });
  }

  observacaoContador() {
    var that = this;
    setTimeout(function() {
      that.aumentarContador();
      if (that.state.contador < 100) {
        if (that.state.contador < 20)
          that.state.mensagem = "parece estar com fome.";
        else if (that.state.contador < 40)
          that.state.mensagem = "parece estar com muita fome!.";
        else if (that.state.contador < 60)
          that.state.mensagem = "parece não ter comido há alguns dias!.";
        else if (that.state.contador < 80)
          that.state.mensagem = "parece não ter comido há algumas semanas!.";
        else if (that.state.contador < 100)
          that.state.mensagem = "Meu Deus do céu!!";

        if (that.state.contador == 99) that.state.mensagem = "Acabou.. :(";

        that.observacaoContador();
      }
    }, 100);
  }

  constructor(props) {
    super(props);
    this.state = { contador: 0, mensagem: "", usuario: [] };
    debugger;
    var setMenu = props.location.funcao.setMenu;
    setMenu([
      {
        endereco: "/",
        titulo: "Home"
      }
    ]);
  }

  render() {
    return (
      <div>
        <ButtonOcurrence
          acionarBotao={this.diminuirContador.bind(this)}
          titulo={"Diminuir Contador"}
          color="inherit"
        />
        <ButtonOcurrence
          acionarBotao={this.aumentarContador.bind(this)}
          titulo={"Aumentar Contador"}
          color="inherit"
        />
        <ButtonOcurrence
          acionarBotao={this.observacaoContador.bind(this)}
          titulo={"Iniciar contagem por observação"}
          color="inherit"
        />
        <h1>Contagem de wafers</h1>
        <IconButton aria-label="Cart">
          <Badge badgeContent={this.state.contador} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <h1>{this.state.mensagem}</h1>
      </div>
    );
  }
}

export default withStyles(styles)(AppBarLayout);
