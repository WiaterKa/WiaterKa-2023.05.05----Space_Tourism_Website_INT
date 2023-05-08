import React from "react";
import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Moon from "./links-destination/Moon";
import Mars from "./links-destination/Mars";
import Europa from "./links-destination/Europa";
import Titan from "./links-destination/Titan";
import { AnimatePresence } from "framer-motion";

export default function Destination({ setBcg }) {
  useEffect(() => {
    setBcg("destination");
  }, []);

  const location = useLocation();

  return (
    <section className="destination">
      <h2>
        <span>O1</span>Pick Your Destination
      </h2>
      <div className="nav-planets">
        <NavLink to="/destination/moon">Moon</NavLink>
        <NavLink to="/destination/mars">Mars</NavLink>
        <NavLink to="/destination/europa">Europa</NavLink>
        <NavLink to="/destination/titan">Titan</NavLink>
      </div>
      <Outlet />

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Routes>
      </AnimatePresence>
    </section>
  );
}
