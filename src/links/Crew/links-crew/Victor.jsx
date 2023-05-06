import React from "react";
import NavigationCrew from "../../../components/Navigation-crew/Navigation-crew";

export default function Victor({ setCurrentCrew }) {
  return (
    <div className="crew-container">
      <div className="txt-box">
        <p className="p-heading">Pilot</p>
        <h2>Victor Glover</h2>
        <p className="p-primary">
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
        </p>
        <NavigationCrew setCurrentCrew={setCurrentCrew} />
      </div>
      <div className="img-box img-victor"></div>
    </div>
  );
}