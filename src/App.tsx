import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
