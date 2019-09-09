import React from "react";
import "./style.css";


const GameOver = props => {
  return (
    <div className="container">
        <div className="row">
        <h1 className="title" onClick={props.gameRestart} >Game Over! Final Score: {props.currentScore} Click here to restart</h1>
         <img className="giffy mx-auto" src="https://i.pinimg.com/originals/44/47/32/4447328205a897236e6a5645634f4b31.gif" alt="zep game over gif angel" />
        </div>
    </div>
    );
};

export default GameOver;
