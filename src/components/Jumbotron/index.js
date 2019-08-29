import React from "react";
// import background from '../../images/cover.jpeg'
// import music from '../../images/musicBW.jpg'
import "./index.css";


function Jumbotron({ children, zep }) {
  return (
    <div
      // style={{ backgroundImage: zep ? `url(${background})` : `url(${music})`}}
      className={'jumbotron'}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
