import React from "react";
import Button from "@material-ui/core/Button";
export default class ButtonOcurrence extends React.Component {
  constructor() {
    super();
  }
  handleClick(event) {
    event.preventDefault();
    this.props.acionarBotao();
  }
  render() {
    return (
      <Button color="inherit" onClick={this.handleClick.bind(this)}>
        {this.props.titulo}
      </Button>
    );
  }
}
