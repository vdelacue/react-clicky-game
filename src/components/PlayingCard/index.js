import React from "react";
import "./style.css";

function PlayingCard(props) {
  return (
    
      <span onClick={() => props.cardClicked(props.id)} className="clicked">
        <div className="card">
          <div className="img-container">
            <img alt={props.name} src={props.image}/>
          </div>
        </div>
      </span>
  );
}

export default PlayingCard;
