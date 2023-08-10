import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
