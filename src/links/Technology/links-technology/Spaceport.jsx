import React from "react";
import { motion } from "framer-motion";

export default function Spaceport() {
  return (
    <>
      <motion.div
        className="txt-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="p-heading">The terminology...</p>
        <h2>Spaceport</h2>
        <p className="p-primary">
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </p>
      </motion.div>
      <motion.div
        className="img-box spaceport-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </>
  );
}
