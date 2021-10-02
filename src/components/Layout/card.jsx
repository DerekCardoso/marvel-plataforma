import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} className="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">Ver mais</button>
    </div>
  );
}

export default Card;