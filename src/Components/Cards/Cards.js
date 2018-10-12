import React, { Component } from 'react';
import FlipCard from 'react-flipcard';
import './Cards.css';

class Cards extends Component {
  render() {
    return(
      <div className="card" onClick={this.props.selectCard}>
        <FlipCard
          flipped = {this.props.cardsCompared || this.props.wasGuessed}
          disabled = {true}
        >
          <div className="tails"></div>
          <div className="heads">
            <i className={`fa ${this.props.icon} fa-5x`} />
          </div>
        </FlipCard>
      </div>
    )
  }
};

export default Cards;