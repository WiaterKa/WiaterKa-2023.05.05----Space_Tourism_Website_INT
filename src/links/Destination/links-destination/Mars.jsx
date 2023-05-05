import React from "react";

export default function Mars() {
  return (
    <div className="container-destination">
      <div className="img img-mars"></div>
      <div className="txt-box">
        <h2>Mars</h2>
        <p className="p-primary">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
        <div className="line"></div>
        <div className="detail-box">
          <div className="d-box">
            <p className="p-secondary">AVG. DISTANCE</p>
            <p className="p-number">225 MIL. km</p>
          </div>
          <div className="d-box">
            <p className="p-secondary">Est. travel time</p>
            <p className="p-number">9 months</p>
          </div>
        </div>
      </div>
    </div>
  );
}
