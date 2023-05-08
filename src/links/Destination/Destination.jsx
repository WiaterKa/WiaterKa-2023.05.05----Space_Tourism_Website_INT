import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Moon from "./links-destination/Moon";
// import Mars from "./links-destination/Mars";
// import Europa from "./links-destination/Europa";
// import Titan from "./links-destination/Titan";

export default function Destination() {
  const [currentPlanet, setCurrentPlanet] = useState("");
  return (
    <section className="destination">
      <h2>
        <span>O1</span>Pick Your Destination
      </h2>
      <div className="nav-planets">
        <NavLink
          to="/destination/moon"
          onClick={() => setCurrentPlanet("Moon")}
        >
          Moon
        </NavLink>
        <NavLink
          to="/destination/mars"
          onClick={() => setCurrentPlanet("Mars")}
        >
          Mars
        </NavLink>
        <NavLink
          onClick={() => setCurrentPlanet("Europa")}
          to="/destination/europa"
        >
          Europa
        </NavLink>
        <NavLink
          onClick={() => setCurrentPlanet("Titan")}
          to="/destination/titan"
        >
          Titan
        </NavLink>
      </div>
      <Outlet />
      {/* {currentPlanet === "" && <Moon />} */}
    </section>
  );
}
