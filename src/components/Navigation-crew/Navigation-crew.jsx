import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationCrew() {
  return (
    <div className="nav-crew">
      <NavLink to="/crew/douglas" className="dot"></NavLink>
      <NavLink to="/crew/mark" className="dot"></NavLink>
      <NavLink to="/crew/victor" className="dot"></NavLink>
      <NavLink to="/crew/anousheh" className="dot"></NavLink>
    </div>
  );
}
