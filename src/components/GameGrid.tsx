import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
<<<<<<< HEAD

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
=======
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

<<<<<<< HEAD
<<<<<<< HEAD
const GameGrid = ({ selectedGenre }: Props) => {
  const { error, data, isLoading } = useGames(selectedGenre);
>>>>>>> 87f9f34 (filter game by genre)
=======
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
>>>>>>> f4a360d (filtering game by platform)
=======
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
>>>>>>> 01b2028 (Refactor: Extracting query objects)
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
