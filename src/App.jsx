import { Box, Container, Typography } from "@mui/material";
import Character from "./components/Character";
import CharacterSkeleton from "./components/CharacterSkeleton";
import { useEffect, useState } from "react";

const fakePromise = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    try {
      await fakePromise();
      const response = await fetch("https://rickandmortyapi.com/api/character/");
      const data = await response.json();
      setData(data);

    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3"
        textAlign="center"
        mb={3}
      >
        Rick and Morty
      </Typography>
      <Box sx={{ display: "grid", gap: 2, maxWidth: 250, mx: "auto" }}>
        {loading ? Array.from(new Array(3)).map((_, index) => (
          <CharacterSkeleton key={index} />
        )) : data.results.map((character) => (
          <Character
            key={character.id}
            data={character}
          />
        ))
        }
      </Box>
    </Container>
  )
}