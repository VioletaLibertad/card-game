import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import './Board.css';

class Board extends Component {
  render() {
    const cards = [1,2,3,4,5];
    return(
      <div className="board">
        {
          cards.map((card) => <Cards />)
        }
      </div>
    )
  }
};

export default Board;