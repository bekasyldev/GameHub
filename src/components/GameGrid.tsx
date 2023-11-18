import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
<<<<<<< HEAD

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
=======
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { error, data, isLoading } = useGames(selectedGenre);
>>>>>>> 87f9f34 (filter game by genre)
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error == "canceled" ? "" : error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
<<<<<<< HEAD
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
=======
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
>>>>>>> 87f9f34 (filter game by genre)
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
