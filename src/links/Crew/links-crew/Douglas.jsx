import React from "react";
import NavigationCrew from "../../../components/Navigation-crew/Navigation-crew";

export default function Douglas({ setCurrentCrew }) {
  return (
    <div className="crew-container">
      <div className="txt-box">
        <p className="p-heading">Comander</p>
        <h2>Douglas Hurley</h2>
        <p className="p-primary">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
        <NavigationCrew setCurrentCrew={setCurrentCrew} />
      </div>
      <div className="img-box img-douglas"></div>
    </div>
  );
}
