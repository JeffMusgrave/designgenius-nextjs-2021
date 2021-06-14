import { SimpleGrid, AspectRatio, Box, Flex, Heading } from "@chakra-ui/react";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";

const PortfolioComponent = (props) => {
  return (
    <FullSection variant="constrainedBox">
      <ContentConstrainer>
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
      </ContentConstrainer>
    </FullSection>
  );
};

export default PortfolioComponent;
