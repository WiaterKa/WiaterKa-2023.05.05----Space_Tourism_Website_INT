import React from "react";
import Douglas from "./links-crew/Douglas";
import Mark from "./links-crew/Mark";
import Victor from "./links-crew/Victor";
import Anousheh from "./links-crew/Anousheh";

export default function Crew({ currentCrew, setCurrentCrew }) {
  return (
    <section className="crew">
      <h2>
        <span>O2</span>Meet your crew
      </h2>

      {currentCrew === "" && <Douglas setCurrentCrew={setCurrentCrew} />}
      {currentCrew === "Douglas" && <Douglas setCurrentCrew={setCurrentCrew} />}
      {currentCrew === "Mark" && <Mark setCurrentCrew={setCurrentCrew} />}
      {currentCrew === "Victor" && <Victor setCurrentCrew={setCurrentCrew} />}
      {currentCrew === "Anousheh" && (
        <Anousheh setCurrentCrew={setCurrentCrew} />
      )}
    </section>
  );
}
