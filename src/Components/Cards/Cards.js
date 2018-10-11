import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  render() {
    return(
      <div className="card">
        <i className={`fa ${this.props.icon} fa-5x`} />
      </div>
    )
  }
};

export default Cards;