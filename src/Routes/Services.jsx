import React from "react";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";


const Services = () => {
  return (
 <>
 <Hero
 
 cName="hero-services"
 heroImg="https://images.unsplash.com/photo-1596357395104-ba989e72b5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
 title="Enjoy Life, Get Fit"
 url ="/services"/>
 
 <OurServices/>
 </>
  );
};

export default Services;
