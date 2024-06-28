import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import GamePage from "./pages/GamePage";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/game">Game</a> |{" "}
            <a href="/results">Results</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
