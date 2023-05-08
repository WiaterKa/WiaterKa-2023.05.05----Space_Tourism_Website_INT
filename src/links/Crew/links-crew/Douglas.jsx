import React from "react";
import { motion } from "framer-motion";

export default function Douglas() {
  return (
    <motion.div
      className="crew-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="txt-box">
        <p className="p-heading">Comander</p>
        <h2>Douglas Hurley</h2>
        <p className="p-primary">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
      <div className="img-box img-douglas"></div>
    </motion.div>
  );
}
