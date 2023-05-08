import React from "react";

export default function NavigationCrew({ setCurrentCrew }) {
  return (
    <div className="nav-crew">
      <div className="dot" onClick={() => setCurrentCrew("Douglas")}></div>
      <div className="dot" onClick={() => setCurrentCrew("Mark")}></div>
      <div className="dot" onClick={() => setCurrentCrew("Victor")}></div>
      <div className="dot" onClick={() => setCurrentCrew("Anousheh")}></div>
    </div>
  );
}
