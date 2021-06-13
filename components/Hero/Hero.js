import { Box } from "@chakra-ui/layout";
import React from "react";
import { bigHero, width } from "../../styles/designgenius/stylevars";

const HeroComponent = (props) => {
  const widthSize = bigHero === true ? "100%" : width;
  return (
    <Box w={widthSize} bg="gray.700" h="30rem">
      {props.children}
    </Box>
  );
};

export default HeroComponent;
