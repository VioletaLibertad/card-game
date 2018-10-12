import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import './Board.css';

class Board extends Component {
  render() {
    return(
      <div className="board">
        {
          this.props.deck
            .map((card, index) => {
              console.log(card);

              const cardsCompared = this.props.cardsBeingCompared.indexOf(card) > -1;
              return <Cards
                key = {index} 
                icon={card.icon}
                cardsCompared = {cardsCompared}
                selectCard = {() => this.props.selectCard(card)}
                wasGuessed = {card.wasGuessed}
              />
            })
        }
      </div>
    )
  }
};

export default Board;