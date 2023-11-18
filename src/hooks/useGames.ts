import useData from "./useData";
import { Genre } from "./useGenres";

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


const useGames = (selectedGenre: Genre | null) => useData<GameProps>('/games',{ params: { genres: selectedGenre?.id}}, [selectedGenre?.id])

export default useGames;
