import { SimpleGrid, AspectRatio, Box, Flex, Heading } from "@chakra-ui/react";

const PortfolioComponent = (props) => {
  return (
    <Flex flexDir="column" mt={20}>
      <Heading as="h2">Portfolio</Heading>
      <SimpleGrid columns={3} spacing={10} mt={10}>
        <AspectRatio ratio={1 / 1}>
          <Box bg="tomato" height="80px"></Box>
        </AspectRatio>
        <AspectRatio ratio={1 / 1}>
          <Box bg="tomato" height="80px"></Box>
        </AspectRatio>
        <AspectRatio ratio={1 / 1}>
          <Box bg="tomato" height="80px"></Box>
        </AspectRatio>
        <AspectRatio ratio={1 / 1}>
          <Box bg="tomato" height="80px"></Box>
        </AspectRatio>
        <AspectRatio ratio={1 / 1}>
          <Box bg="tomato" height="80px"></Box>
        </AspectRatio>
        <AspectRatio ratio={1 / 1}>
          <Box bg="tomato" height="80px"></Box>
        </AspectRatio>
      </SimpleGrid>
    </Flex>
  );
};

export default PortfolioComponent;
