import React from "react";
import "./Works.css";
import Portfolio1 from "../assets/portfolio-8.png";
import Portfolio2 from "../assets/portfolio-7.png.gif";
import Portfolio3 from "../assets/portfolio-9.png";
import Portfolio4 from "../assets/portfolio-10.png";
import Portfolio5 from "../assets/portfolio-11.png";
import Portfolio6 from "../assets/portfolio-13.png";
const Works = () => {
  return (
    <>
      <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">
          I take in paying attention to the smilest details and making sure that
          my work is pixel perfect. i am exiting to bring my skills and
          experience to help business achieve their goals and create a strong
          online presence
        </span>
        <div className="worksImages">
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio2} alt="" className="worksImg" />
          <img src={Portfolio3} alt="" className="worksImg" />
          <img src={Portfolio4} alt="" className="worksImg" />
          <img src={Portfolio5} alt="" className="worksImg" />
          <img src={Portfolio6} alt="" className="worksImg" />
        </div>
        <button className="work-Btn">See More</button>
      </section>
    </>
  );
};

export default Works;
