import React from "react";
import IconButton from "@material-ui/core/IconButton";
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

class Layout extends React.Component {
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

  constructor() {
    super();
    debugger;
    this.state = { contador: 0, mensagem: "", usuario: [] };
    // this.props.location.state.setMenu([
    //   {
    //     endereco: "/lista",
    //     titulo: "Lista de pessoas"
    //   },
    //   {
    //     endereco: "/comilao",
    //     titulo: "Verificar comilança"
    //   }
    // ]);
  }

  // handleClick(event) {
  //   debugger;
  //   event.preventDefault();
  //   this.props.setMenu([
  //     {
  //       endereco: "/lista",
  //       titulo: "Lista de pessoas",
  //       onClick: function(history) {
  //         this.handleClick().bind(this);
  //         history.push(this.endereco);
  //       }
  //     },
  //     {
  //       endereco: "/comilao",
  //       titulo: "Verificar comilança",
  //       onClick: function(history) {
  //         this.handleClick().bind(this);
  //         history.push(this.endereco);
  //       }
  //     }
  //   ]);
  // }

  render() {
    return (
      <div>
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

  componentWillMount() {}
}

export default withStyles(styles)(Layout);
