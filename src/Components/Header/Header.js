import React from "react";
import './Header.css';

const Header = () => {
  return(
    <header>
      <div className="title">
        React-parejas
      </div>
      <div>
        <button type="button" className="restart-btn">
          Reiniciar
        </button>
      </div>
      <div className="title">
        Intentos:
      </div>
    </header>
  )
};

export default Header;