import React from "react";
import { Link, Outlet } from "react-router-dom";
import Moon from "./links-destination/Moon";

export default function Destination() {
  return (
    <section className="destination">
      <h2>
        <span>O1</span>Pick Your Destination
      </h2>
      <div className="nav-planets">
        <Link to="/destination/moon">Moon</Link>
        <Link to="/destination/mars">Mars</Link>
        <Link to="/destination/europa">Europa</Link>
        <Link to="/destination/titan">Titan</Link>
      </div>
      <Outlet />
    </section>
  );
}
