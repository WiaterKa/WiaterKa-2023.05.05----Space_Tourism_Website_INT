import React from "react";
import Douglas from "./links-crew/Douglas";
import Mark from "./links-crew/Mark";
import Victor from "./links-crew/Victor";
import Anousheh from "./links-crew/Anousheh";
import { useState,useEffect } from "react";
import NavigationCrew from "../../components/Navigation-crew/Navigation-crew";

export default function Crew({ setBcg }) {
  const [currentCrew, setCurrentCrew] = useState("");

  useEffect(() => {
    setBcg("crew");
  }, []);

  return (
    <section className="crew">
      <h2 className="h2-heading">
        <span>O2</span>Meet your crew
      </h2>
      {currentCrew === "" && <Douglas />}
      {currentCrew === "Douglas" && <Douglas />}
      {currentCrew === "Mark" && <Mark />}
      {currentCrew === "Victor" && <Victor />}
      {currentCrew === "Anousheh" && <Anousheh />}
      <NavigationCrew setCurrentCrew={setCurrentCrew} />
    </section>
  );
}
