import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { ReorderRounded } from "@mui/icons-material";

function Navbar() {
  const [expandNav, setExpandNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNav(false);
  }, [location]);

  return (
    <nav className="navbar " id={expandNav ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNav((prev) => !prev)}>
          <ReorderRounded />
        </button>
      </div>

      <div className="links">
        <div className="logo">
          <h1>Jhansi's Portfolio</h1>
        </div>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          Projects
        </NavLink>
        <NavLink to="/education" activeClassName="active">
          Education
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
