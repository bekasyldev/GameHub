import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Games
  // Genre
  // Platform
  // Games Genre Platform

  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading fontSize={"5xl"} marginY={5} as={"h1"} paddingLeft={10}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
