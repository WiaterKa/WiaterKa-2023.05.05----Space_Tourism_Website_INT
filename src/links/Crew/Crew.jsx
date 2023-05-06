import React from "react";
import Douglas from "./links-crew/Douglas";

export default function Crew({ currentCrew }) {
  return (
    <section className="crew">
      <h2>
        <span>O2</span>Meet your crew
      </h2>
      {currentCrew === "" ? <Douglas /> : <currentCrew />}
    </section>
  );
}
