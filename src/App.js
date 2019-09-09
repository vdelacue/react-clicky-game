import React, { Component } from "react";
import PlayingCard from "./components/PlayingCard/index";
import Wrapper from "./components/Wrapper";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import cards from "./cards.json";
import GameOver from "./components/GameOver/index";
const iconPath = process.env.PUBLIC_URL + "/images/";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards: cards,
    clickedCards: [],
    highScore: 0,
    currentScore: 0,
    gameRunning: true
  };

  // function to shuffle cards
  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  //function to handle card click (logic of game)
  cardClicked = id => {
    if (this.state.clickedCards.includes(id)) {
      this.setState({ gameRunning: false });
    } else {
      this.setState(
        {
          clickedCards: [...this.state.clickedCards, id],
          cards: this.shuffle(this.state.cards),
          currentScore: this.state.currentScore + 1
        },
        () => this.checkHighScore()
      );
    }
  };

  gameRestart = () => {
    this.setState({ clickedCards: [], currentScore: 0, gameRunning: true });
  };

  checkHighScore = () => {
    if (this.state.clickedCards.length > this.state.highScore) {
      this.setState({ highScore: this.state.clickedCards.length });
    }
  };

  // Map over this.state.cards and render a cardCard component for each card object
  render() {
  
    return (
      <div>
        <ScoreBoard
          highScore={this.state.highScore}
          currentScore={this.state.currentScore}
        />
        <Wrapper>
          {this.state.gameRunning ? (
            this.state.cards.map(card => (
              <PlayingCard
                cardClicked={this.cardClicked}
                shuffle={this.shuffle}
                id={card.id}
                key={card.id}
                name={card.name}
                image={`${iconPath + card.image}`}
                clicked={card.clicked}
              />
            ))
          ) : (
            <GameOver
              currentScore={this.state.currentScore}
              gameRestart={this.gameRestart}
            />
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
