import React from "react";
import "./Skill.css";
import UIDesign from "../assets/ui-design.png";
import WebDesign from "../assets/website-design.png";
import AppDesign from "../assets/app-design.png";
const Skill = () => {
  return (
    <>
      <section id="skill">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          I am a skilled and passionate web designer with experience in creating
          visually appealing and user-friendly websites. i have a strong
          understanding of design and a keen eye for detail. i am proficent in
          Html, Css, JavaScript as well as design softwere such as Photoshop and
          illustrator
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX Design</h2>
              <p>You can write text related to mobile app development</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Web Design</h2>
              <p>You can write text related to mobile app development</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>You can write text related to mobile app development</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
