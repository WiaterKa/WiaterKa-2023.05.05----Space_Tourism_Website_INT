import React from "react";
import { motion } from "framer-motion";

export default function Mark() {
  return (
    <motion.div
    className="crew-container"
      initial={{ x: "110rem" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="txt-box">
        <p className="p-heading">Mission Specialist </p>
        <h2>MARK SHUTTLEWORTH</h2>
        <p className="p-primary">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </p>
      </div>
      <div className="img-box img-mark"></div>
    </motion.div>
  );
}
