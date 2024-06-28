import React, { useEffect, useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useQuery } from "react-query";
import { HandResponse } from "../types/handResponse";
import { Button } from "@mui/material";
import { ItemData } from "../types/itemData";
import { StandardImageList } from "../components/imageTable";

const fetchData = async () => {
  const response = await fetch("http://localhost:5001/api/v1/genereteHands");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const GamePage = () => {
  const [fetchTrigger] = useState(false);
  const [itemData, setItemData] = useState<ItemData[]>([]);

  const { data, error, isLoading, isSuccess, refetch } = useQuery<
    HandResponse,
    Error
  >("dataKey", fetchData, {
    enabled: fetchTrigger,
  });

  useEffect(() => {
    const cards = data?.cards.map((card) => ({
      img: `/cards/${card.rank + card.suit}.png`,
      title: card.rank + card.suit,
    }));

    setItemData([]);

    if (cards) {
      setItemData(cards);
    }
  }, [data]);

  console.log(itemData);

  const handleGetCards = () => {
    refetch();
    setItemData([]);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box marginBottom={"2rem"} marginTop={"2rem"}>
          <Button variant="contained" onClick={handleGetCards}>
            Get cards
          </Button>
        </Box>
        <Box>
          {isLoading && "Loading..."}
          {error && `An error occurred: ${error}`}
          {isSuccess && (
            <>
              <Box component="section" sx={{ p: 2 }}>
                {data?.count}
              </Box>
              <StandardImageList itemData={itemData} />
            </>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default GamePage;
