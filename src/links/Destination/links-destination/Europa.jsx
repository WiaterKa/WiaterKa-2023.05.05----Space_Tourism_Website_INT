import React from "react";
import { motion } from "framer-motion";

export default function Europa() {
  return (
    <motion.div
      className="container-destination"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="img-container">
        <div className="img img-europa"></div>
      </div>
      <div className="txt-box">
        <h2>Europa</h2>
        <p className="p-primary">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <div className="line"></div>
        <div className="detail-box">
          <div className="d-box">
            <p className="p-secondary">AVG. DISTANCE</p>
            <p className="p-number">628 MIL. km</p>
          </div>
          <div className="d-box">
            <p className="p-secondary">Est. travel time</p>
            <p className="p-number">3 years</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
