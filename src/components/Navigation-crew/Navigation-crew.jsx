import React from "react";

export default function NavigationCrew({ setCurrentCrew }) {
  const allDots = Array.from(document.getElementsByClassName("dot"));
  console.log(allDots);

  function handleClick() {
    allDots.map((element) => {
      element.setAttribute("datatype", "");
    });
  }

  return (
    <div className="nav-crew">
      <div
        className="dot"
        datatype=""
        onClick={(event) => {
          setCurrentCrew("Douglas");
          handleClick();
          event.target.setAttribute("datatype", "active");
        }}
      ></div>
      <div
        className="dot"
        datatype=""
        onClick={(event) => {
          setCurrentCrew("Mark");
          handleClick();
          event.target.setAttribute("datatype", "active");
        }}
      ></div>
      <div
        className="dot"
        datatype=""
        onClick={(event) => {
          setCurrentCrew("Victor");
          handleClick();
          event.target.setAttribute("datatype", "active");
        }}
      ></div>
      <div
        className="dot"
        datatype=""
        onClick={(event) => {
          setCurrentCrew("Anousheh");
          handleClick();
          event.target.setAttribute("datatype", "active");
        }}
      ></div>
    </div>
  );
}
