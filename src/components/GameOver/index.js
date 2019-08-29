import React from "react";
import "./style.css";
import Title from "../Title";

const GameOver = props => {
  return (
    <div className="container">
        <div className="row">
        <Title onClick={props.gameRestart}>Game Over! Final Score: {props.currentScore} Click here to restart</Title>
        <img className="giffy mx-auto" src="https://i.pinimg.com/originals/44/47/32/4447328205a897236e6a5645634f4b31.gif" alt="zep game over gif angel" />
        </div>
    </div>
    );
};

export default GameOver;
