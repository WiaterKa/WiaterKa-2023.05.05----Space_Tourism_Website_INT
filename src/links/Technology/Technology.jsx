import React from "react";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Launch from "./links-technology/Launch";
import { Route, Routes } from "react-router-dom";
import Spaceport from "./links-technology/Spaceport";
import Capsule from "./links-technology/Capsule";

export default function Technology({ setBcg }) {
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
          <NavLink to="/technology/launch">
            <div className="circle">1</div>
          </NavLink>
          <NavLink to="/technology/spaceport">
            <div className="circle">2</div>
          </NavLink>
          <NavLink to="/technology/capsule">
            <div className="circle">3</div>
          </NavLink>
        </div>
        <Outlet />

        <Routes>
          <Route path="launch" element={<Launch />} />
          <Route path="spaceport" element={<Spaceport />} />
          <Route path="capsule" element={<Capsule />} />
        </Routes>
      </div>
    </section>
  );
}
