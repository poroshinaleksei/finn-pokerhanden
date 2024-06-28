import React from "react";
import { useQuery } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { HandResponse } from "../types/handResponse";
import ResultTable from "../components/table";
import { getSavedHands } from "../api/getSavedHands";
import { clearDb } from "../api/clearDb";

const ResultsPage = () => {
  const listSavedHands = useQuery<HandResponse[], Error>(
    "dataKey",
    getSavedHands,
    {
      enabled: false,
    }
  );

  const clearSavedHands = useQuery<{ message: string }, Error>(
    "dataKey",
    clearDb,
    {
      enabled: false,
    }
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="row"
          gap="16px"
          marginBottom={"2rem"}
          marginTop={"2rem"}
        >
          <Button variant="contained" onClick={() => listSavedHands.refetch()}>
            Get saved hands
          </Button>
          <Button
            variant="outlined"
            onClick={() => clearSavedHands.refetch()}
            style={{ color: "red", borderColor: "red" }}
          >
            Clear saved hands
          </Button>
        </Box>

        <Box>
          {listSavedHands.isLoading && "Loading..."}
          {listSavedHands.error && `An error occurred: ${listSavedHands.error}`}

          {listSavedHands.isSuccess && (
            <ResultTable results={listSavedHands.data} />
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ResultsPage;
