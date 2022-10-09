import React from "react";
import "../assets/css/Home.css";
import HeroText from "../assets/img/Logo Movie.png";
import Playicon from "../assets/img/Play.png";
function Home() {
  return (
    <div className='Hero-banner'>
      <img className='Herotext' src={HeroText} alt='Herotext' />
      <button
        style={{
          backgroundColor: "#A90909",
          color: "#fff",
          position: "relative",
          left: "-420px",
          top: "250px",
          padding: "15px 30px 15px 40px",
          cursor: "pointer",
        }}
      >
        <span className='Playicon blob2'>
          <img src={Playicon} alt='Playicon' height='20px' width='20px' />
        </span>
        VIEW TRAILER
      </button>
    </div>
  );
}

export default Home;
