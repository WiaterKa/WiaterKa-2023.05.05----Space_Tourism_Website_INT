import React from "react";

export default function NavigationCrew({ setCurrentCrew }) {
  return (
    <div className="nav-crew">
      <div className="dot" onClick={() => setCurrentCrew("Douglas")}></div>
      <div className="dot" onClick={() => setCurrentCrew("Mark")}></div>
      <div className="dot" onClick={() => setCurrentCrew("Victor")}></div>
      <div className="dot" onClick={() => setCurrentCrew("Anousheh")}></div>
    </div>
  );
}

// return (
//     <div className="nav-crew">
//       <Link to="/crew" onClick={() => setCurrentCrew("Douglas")}>
//         <div className="dot"></div>
//       </Link>
//       <Link to="/crew/mark" onClick={() => setCurrentCrew("Mark")}>
//         <div className="dot"></div>
//       </Link>
//       <Link to="/crew/victor" onClick={() => setCurrentCrew("Victor")}>
//         <div className="dot"></div>
//       </Link>
//       <Link to="/crew/anousheh" onClick={() => setCurrentCrew("Anousheh")}>
//         <div className="dot"></div>
//       </Link>
//       <Outlet setCurrentCrew={setCurrentCrew} />
//     </div>
//   );
// }
