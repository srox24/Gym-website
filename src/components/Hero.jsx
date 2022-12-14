import React from 'react';
import "../styles/hero.css"

const Hero = (props) => {
  return (
  <div className={props.cName}>
    <img src={props.heroImg} alt="img" />

    <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <h4>{props.plans}</h4>
        <a href={props.url} className={props.btnClass}>{props.btnText}</a>
    </div>
  </div>
  )
}

export default Hero