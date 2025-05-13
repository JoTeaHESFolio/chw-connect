import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/add">Add Entry</Link>
          </li>
          <li>
            <Link to="/participants">Participants</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
        <img
          src="/favicon-32x32.png"
          alt="CHW Connect Logo"
          style={{ height: "40px", marginLeft: "auto" }}
        />
      </div>
    </nav>
  );
}

export default NavBar;
