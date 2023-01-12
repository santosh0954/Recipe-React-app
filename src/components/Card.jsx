import React from "react";
import { Link } from "react-router-dom";

function Card(props) {

  return (
    <div className="card border-warning shadow-sm">
      <div className="card-header bg-warning text-dark">
        <h5 className="card-title">{props.title}</h5>
      </div>
      <img
        src={props.imageUrl}
        className="img-fluid"
        alt="..."
      />
      <Link to={`/recipe/${props.id}`} className="stretched-link"></Link>
      <div className="card-footer bg-white">
        <h6 className="card-title">Author: {props.author}</h6>
      </div>
    </div>
  );
}

export default Card;
