import React, { Component } from "react";
import PlayingCard from "./components/PlayingCard/index"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards: cards,
    clickedCards: [],
    highScore: 0
  };

  cardClicked = id => { 

    if(this.state.clickedCards.id === id) {
      alert("game Over")
      //then reset the state
    }
    let currentIndex = cards.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    // Filter this.state.cards for cards with an id not equal to the id being removed
    // const cards = this.state.cards.filter(card => card.id !== id);
    // const clickedCards = this.state.cards.filter(card => card.id === id);
    const clickedCards = this.state.cards.filter(card => card.id === id);
    // Set this.state.cards equal to the new cards array
    // this.setState({clickedCards: clickedCards})
    this.setState({ cards: cards, clickedCards: clickedCards });
    this.setState({clickedCards: [...this.state.clickedCards, clickedCards]})
  };

  
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    console.log(this.state.cards)
    console.log(this.state.clickedCards)
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.cards.map(card => (
          <PlayingCard
            cardClicked={this.cardClicked}
            shuffle={this.shuffle}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            clicked={card.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
