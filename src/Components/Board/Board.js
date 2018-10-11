import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import './Board.css';

class Board extends Component {
  render() {
    return(
      <div className="board">
        {
          this.props.deck.map(card => <Cards icon={card.icon} />)
        }
      </div>
    )
  }
};

export default Board;