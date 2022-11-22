import React from "react";

function Card({ name, age, city, url }) {
  return (
    <div className="card">
      <div className="avatar ">
        <img className="avatar-pic" src={url} alt={name}></img>
      </div>

      <div className="avtar-info">
        <div>Name:{name} </div>
        <div>Age:{age}</div>
        <div>City:{city}</div>
      </div>
    </div>
  );
}

export default Card;
