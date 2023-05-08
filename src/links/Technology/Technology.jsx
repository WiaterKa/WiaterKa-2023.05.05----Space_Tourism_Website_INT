import React from "react";
import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Launch from "./links-technology/Launch";
import { Route, Routes } from "react-router-dom";
import Spaceport from "./links-technology/Spaceport";
import Capsule from "./links-technology/Capsule";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { motion } from "framer-motion";

export default function Technology({ setBcg }) {
  useEffect(() => {
    setBcg("technology");
  }, []);

  const location = useLocation();

  return (
    <motion.div
      className="technology"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
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

        <AnimatePresence>
          <Routes key={location.path} location={location}>
            <Route path="launch" element={<Launch />} />
            <Route path="spaceport" element={<Spaceport />} />
            <Route path="capsule" element={<Capsule />} />
          </Routes>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
