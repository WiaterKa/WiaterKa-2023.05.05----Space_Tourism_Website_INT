import React from "react";

export default function Moon() {
  return (
    <div className="container-destination">
      <div className="img img-moon"></div>
      <div className="txt-box">
        <h2>Moon</h2>
        <p className="p-primary">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className="line"></div>
        <div className="detail-box">
          <div className="d-box">
            <p className="p-secondary">AVG. DISTANCE</p>
            <p className="p-number">384,400 km</p>
          </div>
          <div className="d-box">
            <p className="p-secondary">Est. travel time</p>
            <p className="p-number">3 DAYS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
