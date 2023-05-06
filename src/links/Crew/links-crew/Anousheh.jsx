import React from "react";
import NavigationCrew from "../../../components/Navigation-crew/Navigation-crew";

export default function Anousheh({ setCurrentCrew }) {
  return (
    <div className="crew-container">
      <div className="txt-box">
        <p className="p-heading">Flight Engineer</p>
        <h2>Anousheh Ansari</h2>
        <p className="p-primary">
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </p>
        <NavigationCrew setCurrentCrew={setCurrentCrew} />
      </div>
      <div className="img-box img-anousheh"></div>
    </div>
  );
}
