import useData from "./useData";

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


const useGames = () => useData<GameProps>('/games')

export default useGames;
