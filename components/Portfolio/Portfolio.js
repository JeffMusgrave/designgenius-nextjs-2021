import { SimpleGrid, AspectRatio, Box, Heading } from "@chakra-ui/react";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";

export default function PortfolioComponent(props) {
  return (
    <FullSection>
      <ContentConstrainer>
        <Heading as="h2">Portfolio</Heading>
        <SimpleGrid columns={3} spacing={10} mt={10}>
          <AspectRatio ratio={1 / 1}>
            <Box bg="tomato" height="80px" borderRadius="3xl"></Box>
          </AspectRatio>
          <AspectRatio ratio={1 / 1}>
            <Box bg="tomato" height="80px" borderRadius="3xl"></Box>
          </AspectRatio>
          <AspectRatio ratio={1 / 1}>
            <Box bg="tomato" height="80px" borderRadius="3xl"></Box>
          </AspectRatio>
          <AspectRatio ratio={1 / 1}>
            <Box bg="tomato" height="80px" borderRadius="3xl"></Box>
          </AspectRatio>
          <AspectRatio ratio={1 / 1}>
            <Box bg="tomato" height="80px" borderRadius="3xl"></Box>
          </AspectRatio>
          <AspectRatio ratio={1 / 1}>
            <Box bg="tomato" height="80px" borderRadius="3xl"></Box>
          </AspectRatio>
        </SimpleGrid>
      </ContentConstrainer>
    </FullSection>
  );
}
