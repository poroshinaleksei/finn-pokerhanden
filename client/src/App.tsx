import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import GamePage from "./pages/GamePage";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";

import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit" href="/">
                  Home
                </Button>
                <Button color="inherit" href="/game">
                  Game
                </Button>
                <Button color="inherit" href="/results">
                  Results
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
