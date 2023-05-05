import "./App.scss";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./links/Home/Home";

function App() {
  return (
    <>
      <Home />
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/destination" component={Destination} />
          <Route path="/crew" component={Crew} />
          <Route path="/technology" component={Technology} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
