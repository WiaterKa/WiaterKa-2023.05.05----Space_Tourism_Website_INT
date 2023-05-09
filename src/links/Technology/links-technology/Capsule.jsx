import React from "react";
import { motion } from "framer-motion";

export default function Capsule() {
  return (
    <>
      <motion.div
        className="txt-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="p-heading">The terminology...</p>
        <h2>Space Capsule</h2>
        <p className="p-primary">
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      </motion.div>
      <motion.div
        className="img-box capsule-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </>
  );
}
