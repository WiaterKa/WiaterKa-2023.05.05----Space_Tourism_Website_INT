import "./scss/App.scss";
import React from "react";
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./links/Home/Home";
import Destination from "./links/Destination/Destination";
import Moon from "./links/Destination/links-destination/Moon";
import Mars from "./links/Destination/links-destination/Mars";
import Europa from "./links/Destination/links-destination/Europa";
import Titan from "./links/Destination/links-destination/Titan";
import Crew from "./links/Crew/Crew";
import Technology from "./links/Technology/Technology";
import Douglas from "./links/Crew/links-crew/Douglas";
import Mark from "./links/Crew/links-crew/Mark";
import Anousheh from "./links/Crew/links-crew/Anousheh";
import Victor from "./links/Crew/links-crew/Victor";
import AnimatedPage from "./helpers/AnimatedPage";

function App() {
  const [isBcg, setBcg] = useState("hero");
  const [currentCrew, setCurrentCrew] = useState("");
  return (
    <div className="page-wrapper" id={isBcg}>
      <Navigation setBcg={setBcg} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/destination" element={<Destination />}>
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>

        <Route
          path="/crew"
          element={
            <Crew currentCrew={currentCrew} setCurrentCrew={setCurrentCrew} />
          }
        >
          {/* <Route
              path="douglas"
              element={<Douglas setCurrentCrew={setCurrentCrew} />}
            />
            <Route
              path="mark"
              element={<Mark setCurrentCrew={setCurrentCrew} />}
            />
            <Route
              path="victor"
              element={<Victor setCurrentCrew={setCurrentCrew} />}
            />
            <Route
              path="anousheh"
              element={<Anousheh setCurrentCrew={setCurrentCrew} />}
            /> */}
        </Route>

        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
