import React from "react";

export default function Titan() {
  return (
    <div className="container-destination">
      <div className="img img-titan"></div>
      <div className="txt-box">
        <h2>Titan</h2>
        <p className="p-primary">
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <div className="line"></div>
        <div className="detail-box">
          <div className="d-box">
            <p className="p-secondary">AVG. DISTANCE</p>
            <p className="p-number">1.6 BIL. km</p>
          </div>
          <div className="d-box">
            <p className="p-secondary">Est. travel time</p>
            <p className="p-number">7 years</p>
          </div>
        </div>
      </div>
    </div>
  );
}
