import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgeVerification from "./AgeVerification";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgeVerification />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;