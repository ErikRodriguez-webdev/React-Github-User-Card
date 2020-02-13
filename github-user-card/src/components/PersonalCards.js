import React from "react";
import "../App.css";

const PersonalCards = (props) => {
  return (
    <div key={props.myData.id} className="personalCard">
      <h2>{props.myData.name}</h2>
      <p>{props.myData.login}</p>
    </div>
  );
};

export default PersonalCards;
