import React from "react";
import Jumbotron from "../Jumbotron/index.js"
import "./style.css";


function ScoreBoard(props) {
  return (
    <Jumbotron zep>
      
      <h1 className="scoreHeader">Current High Score: {props.highScore} <span className="currentScore typewriter">Current Score: {props.currentScore}</span></h1>

      </Jumbotron>
  );
}

export default ScoreBoard;
