import React from "react";
import { motion } from "framer-motion";

export default function Launch() {
  return (
    <>
      <motion.div
        className="txt-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="p-heading">The terminology...</p>
        <h2>Launch Vehicle</h2>
        <p className="p-primary">
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      </motion.div>
      <motion.div
        className="img-box launch-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </>
  );
}
