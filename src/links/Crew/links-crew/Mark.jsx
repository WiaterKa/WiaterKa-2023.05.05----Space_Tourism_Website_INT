import React from "react";
import { motion } from "framer-motion";

export default function Mark() {
  return (
    <motion.div
      className="crew-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
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
