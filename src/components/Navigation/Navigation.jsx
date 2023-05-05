import React from "react";
import { Link } from "react-router-dom";
import Home from "../../links/Home/Home";
import Destination from "../../links/Destination/Destination";
import Crew from "../../links/Crew/Crew";
import Technology from "../../links/Technology/Technology";

export default function Navigation() {
  return (
    <nav>
      <div className="logo">
        <img src="public/shared/logo.svg" alt="logo" />
        <div className="logo-line"></div>
      </div>
      <div className="nav-items">
        <Link to="/" element={<Home />}>
          <span>00</span> Home
        </Link>
        <Link to="/destination" element={<Destination />}>
          <span>01</span>Destination
        </Link>
        <Link to="/crew" element={<Crew />}>
          <span>02</span>Crew
        </Link>
        <Link to="/technology" element={<Technology />}>
          <span>03</span>Technology
        </Link>
      </div>
    </nav>
  );
}
