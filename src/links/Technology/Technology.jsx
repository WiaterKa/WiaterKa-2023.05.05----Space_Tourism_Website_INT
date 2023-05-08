import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Launch from "./links-technology/Launch";


export default function Technology({ setBcg }) {
  const [currentTechnology, setCurrentTechnology] = useState("");
  const [disableLaunch, setDisableLaunch] = useState("launched");

  useEffect(() => {
    setBcg("technology");
  }, []);

  return (
    <section className="technology">
      <h2 className="h2-heading">
        <span>O3</span>Space Launch 101
      </h2>
      <div className="technology-container">
        <div className="nav-technology">

              <NavLink
                to="/technology/launch"
                onClick={() => setCurrentTechnology("Launch")}
                id={disableLaunch}
              >
                <div className="circle">1</div>
              </NavLink>
              <NavLink
                to="/technology/spaceport"
                onClick={() => {
                  setCurrentTechnology("Spaceport");
                  setDisableLaunch("");
                }}
              >
                <div className="circle">2</div>
              </NavLink>
              <NavLink
                to="/technology/capsule"
                onClick={() => {
                  setCurrentTechnology("Capsule");
                  setDisableLaunch("");
                }}
              >
                <div className="circle">3</div>
              </NavLink>

        </div>
        <Outlet />
        {currentTechnology === "" && <Launch />}
        {/* {currentTechnology === "Launch" && <Launch />}
        {currentTechnology === "Spaceport" && <Spaceport />}
        {currentTechnology === "Capsule" && <Capsule />} */}
      </div>
    </section>
  );
}
