import React from "react";
import { Link } from "react-router-dom";
import Home from "../../links/Home/Home";
import Destination from "../../links/Destination/Destination";
import Crew from "../../links/Crew/Crew";
import Technology from "../../links/Technology/Technology";
import { useState } from "react";

export default function Navigation({ setBcg }) {
  const [isActiveBurg, setsActiveBurg] = useState("");

  const handleToggle = () => {
    setsActiveBurg(!isActiveBurg);
  };

  return (
    <nav>
      <div className="logo">
        <img src="public/shared/logo.svg" alt="logo" />
        <div className="logo-line"></div>
      </div>
      <div className={`nav-items ${isActiveBurg ? "active" : ""}`}>
        <Link
          to="/"
          element={<Home />}
          onClick={() => {
            setBcg("hero");
          }}
        >
          <span>00</span> Home
        </Link>
        <Link
          to="/destination"
          element={<Destination />}
          onClick={() => {
            setBcg("destination");
          }}
        >
          <span>01</span>Destination
        </Link>
        <Link to="/crew" element={<Crew />}>
          <span>02</span>Crew
        </Link>
        <Link to="/technology" element={<Technology />}>
          <span>03</span>Technology
        </Link>
      </div>
      <button
        className={`burger ${isActiveBurg ? "active" : ""}`}
        onClick={handleToggle}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </nav>
  );
}
