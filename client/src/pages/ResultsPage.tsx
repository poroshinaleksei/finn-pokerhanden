import React, { useState } from "react";
import { useQuery } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { HandResponse } from "../types/handResponse";
import ResultTable from "../components/table";

const fetchData = async () => {
  const response = await fetch("http://localhost:5001/api/v1/getSavedhands");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const ResultsPage = () => {
  const [fetchTrigger] = useState(false);
  const { data, error, isLoading, refetch } = useQuery<HandResponse[], Error>(
    "dataKey",
    fetchData,
    {
      enabled: fetchTrigger,
    }
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box marginBottom={"2rem"} marginTop={"2rem"}>
          <Button variant="contained" onClick={() => refetch()}>
            Get saved hands
          </Button>
        </Box>

        <Box>
          {isLoading ? (
            "Loading..."
          ) : error ? (
            `An error occurred: ${error}`
          ) : (
            <ResultTable results={data} />
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ResultsPage;
