import { Badge } from "@chakra-ui/react";

interface ScoreProps {
  score: number;
}

const CriticScore = ({ score }: ScoreProps) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={"8px"}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
