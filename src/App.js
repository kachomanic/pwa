import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Sales from "./pages/Sales";
import Equipment from "./pages/Equipment";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBarcodeRead,
  faTractor,
  faCirclePlay,
  faUser,
  faWaveformLines,
  faCalculator,
  faHouseChimney,
  faBell,
  faArrowLeft,
} from "@fortawesome/pro-solid-svg-icons";

function App() {
  library.add(
    faTractor,
    faBarcodeRead,
    faCirclePlay,
    faUser,
    faWaveformLines,
    faCalculator,
    faHouseChimney,
    faBell,
    faArrowLeft
  );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
    </Router>
  );
}

export default App;
