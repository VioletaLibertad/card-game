import React, { Component } from 'react';
import Header from './Header/Header';
import Board from './Board/Board';
import buildDeck from './deck/buildDeck';
import './App.css';

const getInitialState = () => {
  const deck = buildDeck();
  return {
    deck, 
    cardsBeingCompared: [],
    isBeingCompared: false, 
    livesAmount: 0
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }
  render() {
    return (
      <div className="App">
        <Header
          livesAmount = {this.state.livesAmount}
          restartGame = {() => this.restartGame()}
        />
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
      let deck = this.state.deck;
      

      if (firstCard.icon === secondCard.icon) {
        deck = deck.map((card) => {
          if (card.icon !== firstCard.icon) {
            return card;
          }
          return {...card, wasGuessed: true};
        });
      }
      
      this.checkWinner(deck);
      this.setState({
        deck,
        cardsBeingCompared: [],
        isBeingCompared: false, 
        livesAmount: this.state.livesAmount + 1
      })
    }, 1000)    
  };

  checkWinner(deck) {
    if (
      deck.filter((card) => !card.wasGuessed).length === 0
    ) {
      alert(`Ganaste en ${this.state.livesAmount} intentos`);
    }
  };

  restartGame() {
    this.setState(
      getInitialState()
    )
  };

}

export default App;
