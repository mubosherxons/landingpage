import React from "react";
import "./style.css";
import AboutBanner from '../../images/home-footer.svg';

function About() {
  return (
    <div className="about-container__item">
      <div className="about__container-title">
        <h4 className="about__secondary-title"> Aenean Consectetur Porta </h4>
        <h1 className="about__containerinfo-title">
          Nullam quis risus eget urna mollis ornare vel eu leo.
        </h1>
      </div>
      <div className="about__banner-container">
        <img src={AboutBanner} alt="About Banner" />
      </div>
    </div>
  );
}

export default About;
