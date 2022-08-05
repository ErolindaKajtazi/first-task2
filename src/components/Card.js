import React from "react";
import './Card.css';

function Card(props) {
  const { id, date, button1, name, text, button2 } = props;
  return (
    <div>
      <h6>{`${id} ${date}`}</h6>
      <div className="prog">
        <button className="btn">{button1}</button>
        <h6>{name}</h6>
      </div>
      <p className="text">{text}</p>
      <button className="btn-2">{button2}</button>
    </div>
  );
}

export default Card;