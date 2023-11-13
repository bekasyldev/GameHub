import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface GameProps {
  id: number;
  name: string;
}

interface FetchGameProps {
  count: number;
  results: GameProps[];
}

const GameGrid = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameProps>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
    console.log(error);
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
