import React from "react";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import "../styles/Footer.css";

function Footer() {
  const linkdinLink =
    "https://www.linkedin.com/in/irigela-jhansi-reddy-798950200/";
  const emailAddress = "irigelajhansi@gmail.com";

  const mailtoLink = `mailto:${emailAddress}`;

  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/jhaan_seee/" target="_blank">
          <Instagram />
        </a>
        <a href={linkdinLink} target="_blank">
          <LinkedIn />
        </a>

        <a href="https://github.com/JhansiIrigela" target="_blank">
          <GitHub />
        </a>
      </div>
      <p>&copy;2023 JhansiIrigela.com</p>
    </div>
  );
}

export default Footer;
