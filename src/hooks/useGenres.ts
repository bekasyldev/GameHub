import { useState, useEffect } from "react";
import apiClient from "../services/api.client";

interface FetchGenresProps {
    count: number;
    results: GenresProps[]
}
interface GenresProps {
    id: number;
    name: string;
}

const useGenres = () => {
    const [genres, setGenres] = useState<GenresProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresProps>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return; // Checking for AbortError
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;