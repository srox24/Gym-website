import React from "react";
import TrainerData from "../components/TrainerData";
import "../styles/trainer.css";

const Trainers = () => {
  return (
    <div className="trainers">
      <div className="heading">
        <h1>
          Our <span>Trainers</span>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>

      <div className="trainer-card">
        <TrainerData
          image="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
          heading="John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        />
        <TrainerData
          image="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
          heading="John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        />
        <TrainerData
          image="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
          heading="John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        />
      </div>
    </div>
  );
};

export default Trainers;
