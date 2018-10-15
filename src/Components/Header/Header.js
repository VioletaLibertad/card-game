import React, { Component } from "react";
import './Header.css';

class Header extends Component {
  render() {
    return(
      <header>
        <div className="title">
          React-parejas
        </div>
        <div>
          <button type="button" className="restart-btn" onClick={this.props.restartGame}>
            Reiniciar
          </button>
        </div>
        <div className="title">
          Intentos: {this.props.livesAmount}
        </div>
      </header>
    )
  }
};

export default Header;