import React, { Component } from 'react';
import Header from './Header/Header';
import Board from './Board/Board';
import buildDeck from './deck/buildDeck';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: buildDeck(),
      cardsBeingCompared: [],
      isBeingCompared: false  
    };
    console.log('asdf' + this.props.deck);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Board 
          deck = {this.state.deck}
          cardsBeingCompared = {this.state.cardsBeingCompared}
          selectCard = {(card) => this.selectCard(card)}
        />
      </div>
    );
  } 

  selectCard(card) {
    if (
      this.state.isBeingCompared ||
      this.state.cardsBeingCompared.indexOf(card) > -1 ||
      card.wasGuessed
    ) {
      return;
    }

    const cardsBeingCompared = [...this.state.cardsBeingCompared, card];
    this.setState({
      cardsBeingCompared
    });

    if (cardsBeingCompared.length === 2) {
      this.comparePair(cardsBeingCompared
      );
    }
  }

  comparePair(cardsBeingCompared) {
    this.setState({isBeingCompared: true});
    setTimeout(() => {
      const [firstCard, secondCard] = cardsBeingCompared;
      let deck = this.props.deck;
      

      if (firstCard.icon === secondCard.icon) {
        deck = deck.map((card) => {
          if (card.icon !== firstCard.icon) {
            return card;
          }
          return {...card, wasGuessed: true};
        });
      }
      
      this.setState({
        deck,
        cardsBeingCompared: [],
        isBeingCompared: false
      })
    }, 1000)
    
  };

}

export default App;
