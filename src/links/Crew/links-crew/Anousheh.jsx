import React from "react";
import { motion } from "framer-motion";

export default function Anousheh() {
  return (
    <motion.div
      className="crew-container"
      initial={{ x: "100rem" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="txt-box">
        <p className="p-heading">Flight Engineer</p>
        <h2>Anousheh Ansari</h2>
        <p className="p-primary">
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </p>
      </div>
      <div className="img-box img-anousheh"></div>
    </motion.div>
  );
}
