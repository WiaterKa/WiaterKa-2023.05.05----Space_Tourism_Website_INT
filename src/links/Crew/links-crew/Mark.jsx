import React from "react";

import NavigationCrew from "../../../components/Navigation-crew/Navigation-crew";

export default function Mark({ setCurrentCrew }) {
  return (
    <div className="crew-container">
      <div className="txt-box">
        <p className="p-heading">Mission Specialist </p>
        <h2>MARK SHUTTLEWORTH</h2>
        <p className="p-primary">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </p>
        <NavigationCrew setCurrentCrew={setCurrentCrew} />
      </div>
      <div className="img-box img-mark"></div>
    </div>
  );
}
