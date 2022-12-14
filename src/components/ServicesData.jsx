import React from "react";
import "../styles/services.css";

const ServicesData = (props) => {
  return (
    <div class="card">
      <div class="card-cover">
        <img src={props.image} alt="Gym" />
      </div>

      <div class="card-content">
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ServicesData;
