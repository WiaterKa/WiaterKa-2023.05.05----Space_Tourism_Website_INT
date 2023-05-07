import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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
        <Link to="/destination/moon">Moon</Link>
        <Link to="/destination/mars" onClick={() => setCurrentPlanet("Mars")}>
          Mars
        </Link>
        <Link
          to="/destination/europa"
          // onClick={() => setCurrentPlanet("Europa")}
        >
          Europa
        </Link>
        <Link
          to="/destination/titan"
          // onClick={() => setCurrentPlanet("Titan")}
        >
          Titan
        </Link>
      </div>
      <Outlet />
      {currentPlanet === "" && <Moon />}
      {/* {currentPlanet === "Moon" && <Moon />}
      {currentPlanet === "Mars" && <Mars />}
      {currentPlanet === "Europa" && <Europa />}
      {currentPlanet === "Titan" && <Titan />} */}
    </section>
  );
}
