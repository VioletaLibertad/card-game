import React, { Component } from 'react';
import Header from './Header/Header';
import Board from './Board/Board';
import buildDeck from './deck/buildDeck';
import './App.css';

const getInitialState = () => {
  const deck = buildDeck();
  return {
    deck
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
        <Header />
        <Board 
          deck = {this.state.deck}
        />
      </div>
    );
  } 
}

export default App;
