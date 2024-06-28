import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ResultsPage from "./pages/ResultsPage";
import GamePage from "./pages/GamePage";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Container maxWidth="lg" sx={{ bgcolor: "#cfe8fc", minHeight: "50vh" }}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit" href="/">
                  Game
                </Button>
                <Button color="inherit" href="/results">
                  Results
                </Button>
                <Typography
                  textAlign={"center"}
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Finn pokerhånden
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <Routes>
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/" element={<GamePage />} />
          </Routes>
        </Container>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
