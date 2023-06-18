import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Protected from "./components/Protected";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/home" element={<Protected />} />
    </Routes>
  );
}

export default App;
