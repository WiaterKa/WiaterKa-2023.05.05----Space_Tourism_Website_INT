import "./scss/App.scss";
import React from "react";
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./links/Home/Home";
import Destination from "./links/Destination/Destination";
import Crew from "./links/Crew/Crew";
import Technology from "./links/Technology/Technology";
import Capsule from "./links/Technology/links-technology/Capsule";
import Spaceport from "./links/Technology/links-technology/Spaceport";
import Launch from "./links/Technology/links-technology/Launch";

function App() {
  const [isBcg, setBcg] = useState("hero");
  const location = useLocation();

  return (
    <div className="page-wrapper" id={isBcg}>
      <Navigation setBcg={setBcg} />
      <Routes>
        <Route path="/" element={<Home setBcg={setBcg} />} />

        <Route
          path="/destination/*"
          element={<Destination setBcg={setBcg} />}
        />

        <Route path="/crew/*" element={<Crew setBcg={setBcg} />} />

        <Route path="/technology/*" element={<Technology setBcg={setBcg} />} />
      </Routes>
    </div>
  );
}

export default App;
