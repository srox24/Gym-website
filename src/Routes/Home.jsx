import React from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Trainers from "./Trainers";
import OurServices from "../components/OurServices";
import Pricing from "./Pricing";


const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
        title="Enjoy Life, Get Fit"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
        plans="Plans Starting At $10"
        btnClass="show"
        btnText="7 Days Free Trial"
      />
      <Feature />
      <Trainers/>
    <OurServices/>
    <Pricing/>
    </>
  );
};

export default Home;
