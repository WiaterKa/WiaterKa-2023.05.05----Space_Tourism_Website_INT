import React from "react";
import { motion } from "framer-motion";

export default function Moon() {
  return (
    <motion.div
      className="container-destination"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="img-container">
        <div className="img img-moon"></div>
      </div>
      <div className="txt-box">
        <h2>Moon</h2>
        <p className="p-primary">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className="line"></div>
        <div className="detail-box">
          <div className="d-box">
            <p className="p-secondary">AVG. DISTANCE</p>
            <p className="p-number">384,400 km</p>
          </div>
          <div className="d-box">
            <p className="p-secondary">Est. travel time</p>
            <p className="p-number">3 DAYS</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
