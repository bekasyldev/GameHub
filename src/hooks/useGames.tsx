import { useState, useEffect } from "react";
import apiClient from "../services/api.client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GameProps {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

interface FetchGameProps {
  count: number;
  results: GameProps[];
}

const useGames = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGameProps>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return; // Checking for AbortError
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
