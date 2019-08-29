import React, { Component } from "react";
import PlayingCard from "./components/PlayingCard/index";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import cards from "./cards.json";
import Background from "./images/zep-background.jpg";
const iconPath = process.env.PUBLIC_URL + "/images/";

console.log(Background);
// const sectionStyle = {
//   backgroundImage: "url(" + { Background } + ")"
// };

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
      this.setState({gameRunning: false})
      //then reset the state
      this.setState({ clickedCards: [], currentScore: 0 });
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
    // Filter this.state.cards for cards with an id not equal to the id being removed
    // const cards = this.state.cards.filter(card => card.id !== id);
    // const clickedCards = this.state.cards.filter(card => card.id === id);
    // const clickedCards = this.state.cards.filter(card => card.id === id);
    // Set this.state.cards equal to the new cards array
    // this.setState({clickedCards: clickedCards})
    //   this.setState({ cards: cards});
    //   this.setState({clickedCards: [...this.state.clickedCards, id]})
    //   this.setState({highScore: this.state.highScore + 1})
    // }
  };

  checkHighScore = () => {
    if (this.state.clickedCards.length > this.state.highScore) {
      this.setState({ highScore: this.state.clickedCards.length });
    }
  };

  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    console.log(this.state.cards);
    console.log(this.state.clickedCards);
    console.log(this.state.highScore);
    return (
      //   <>
      //   <img
      //     src={`${iconPath}coda.jpeg`}
      //     alt="more"
      // />

      <div>
        <ScoreBoard highScore={this.state.highScore} currentScore={this.state.currentScore} />
        <Wrapper>
          <Title>Zeppelin Clicky Game</Title>
          
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
            <h1>Game Over</h1>
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
