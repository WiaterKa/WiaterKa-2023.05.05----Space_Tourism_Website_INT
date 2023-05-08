import React from "react";
import Douglas from "./links-crew/Douglas";
import Mark from "./links-crew/Mark";
import Victor from "./links-crew/Victor";
import Anousheh from "./links-crew/Anousheh";
import { useState, useEffect } from "react";
import NavigationCrew from "../../components/Navigation-crew/Navigation-crew";
import { Route, Routes } from "react-router-dom";

export default function Crew({ setBcg }) {
  useEffect(() => {
    setBcg("crew");
  }, []);

  return (
    <section className="crew">
      <h2 className="h2-heading">
        <span>O2</span>Meet your crew
      </h2>

      <Routes>
        <Route path="douglas" element={<Douglas />} />
        <Route path="mark" element={<Mark />} />
        <Route path="victor" element={<Victor />} />
        <Route path="anousheh" element={<Anousheh />} />
      </Routes>

      <NavigationCrew />
    </section>
  );
}
