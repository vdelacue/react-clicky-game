import React from "react";
import Jumbotron from "../Jumbotron/index.js"
import "./style.css";
import Title from "../Title/index"


function ScoreBoard(props) {
  return (
    <>
    <Title>Zeppelin Clicky Game</Title>
    <Jumbotron zep>
      <h1 className="scoreHeader">Current High Score: {props.highScore} <span className="currentScore">Current Score: {props.currentScore}</span></h1>
      <p>Instructions: click each album once, after every click albums will shuffle. If you click same album twice its Game Over!</p>
      </Jumbotron>
      </>
  );
}

export default ScoreBoard;
