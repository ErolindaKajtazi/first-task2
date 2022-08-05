import React from "react";
import './Card.css';

function Card(props) {
  const { id, date, button1, name, text, button2 } = props;
  return (
    <div>
      <h6>{`${id} ${date}`}</h6>
      <div>
        <button className="bg-color">{button1}</button>
        <h6>{name}</h6>
      </div>
      <p>{text}</p>
      <button>{button2}</button>
    </div>
  );
}

export default Card;