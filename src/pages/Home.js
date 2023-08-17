import { Email, GitHub, LinkedIn, Article } from "@mui/icons-material";
import React from "react";
import "../styles/Home.css";

function Home() {
  const linkdinLink =
    "https://www.linkedin.com/in/irigela-jhansi-reddy-798950200/";
  const emailAddress = "irigelajhansi@gmail.com";

  const mailtoLink = `mailto:${emailAddress}`;

  return (
    <div className="home">
      <div className="about">
        <h2>
          Hi, My name is <span className="name">Jhansi</span>
        </h2>
        <div className="prompt">
          <p>
            A Web Developer with a passion for learning and creating Webistes
          </p>
          <a href={linkdinLink} target="_blank" title="Linkedin">
            <LinkedIn />
          </a>
          <a href={mailtoLink} target="_blank" title="My Email">
            <Email />
          </a>
          <a href="https://github.com/JhansiIrigela" target="_blank" title="Github">
            <GitHub />
          </a>
          <a href="https://drive.google.com/file/d/1M4xDfv3OTGiIm0vm8vnF9V-kFy9jAgUs/view?usp=drive_link" target="_blank" title="Resume">
            <Article /> 
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML5, CSS3, BOOTSTRAP, REACT, REDUX </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NODEJS, EXPRESS, MONGODB, MONGOOSE</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JAVASCRIPT</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
