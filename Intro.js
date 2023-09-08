import React from "react";
import "./Intro.css";
import bg from "../assets/image1.png";
import btnImg from "../assets/hireme.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello</span>
          <span className="introText">
            I'm <span className="introName">Subham</span> <br /> Web Developer
          </span>
          <p className="introPara">
            I am a Skilled Web Developer With Experience In Creating <br />
            Visually Appealing And User Friendly
          </p>
          <Link>
            <button className="btn">
              <img src={btnImg} alt="Hire Me" className="btnImg" />
              Hire Me
            </button>
          </Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
      </section>
    </>
  );
};

export default Intro;
