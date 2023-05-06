import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function NavigationCrew({ setCurrentCrew }) {
  return (
    <div className="nav-crew">
      <Link
        to="/crew/douglas"
        onClick={() => {
          setCurrentCrew("Douglas");
        }}
      >
        <div className="dot"></div>
      </Link>
      <Link to="/crew/mark" onClick={() => setCurrentCrew("Mark")}>
        <div className="dot"></div>
      </Link>
      <Link to="/crew/victor">
        <div className="dot"></div>
      </Link>
      <Link to="/crew/anousheh">
        <div className="dot"></div>
      </Link>
      <Outlet />
    </div>
  );
}
