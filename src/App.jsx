import "./scss/App.scss";
import React from "react";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./links/Home/Home";
import Destination from "./links/Destination/Destination";
import Crew from "./links/Crew/Crew";
import Technology from "./links/Technology/Technology";

function App() {
  return (
    <>
      <div className="page-wrapper" id="hero">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
