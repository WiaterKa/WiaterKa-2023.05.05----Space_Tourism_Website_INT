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

import Capsule from "./links/Technology/links-technology/Capsule";
import Spaceport from "./links/Technology/links-technology/Spaceport";
import Launch from "./links/Technology/links-technology/Launch";

function App() {
  const [isBcg, setBcg] = useState("hero");

  return (
    <div className="page-wrapper" id={isBcg}>
      <Navigation setBcg={setBcg} />
      <Routes>
        <Route path="/" element={<Home setBcg={setBcg} />} />

        <Route path="/destination" element={<Destination setBcg={setBcg} />}>
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>

        <Route path="/crew" element={<Crew setBcg={setBcg} />} />

        <Route path="/technology" element={<Technology setBcg={setBcg} />}>
          <Route path="launch" element={<Launch />} />
          <Route path="spaceport" element={<Spaceport />} />
          <Route path="capsule" element={<Capsule />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
