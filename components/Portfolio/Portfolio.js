import { SimpleGrid, AspectRatio, Box, Heading } from "@chakra-ui/react";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";

export default function PortfolioComponent(props) {
  return (
    <FullSection>
      <ContentConstrainer>
        <Heading as="h2">Our Work</Heading>
        <Heading as="h3">Digital Design</Heading>
        <SimpleGrid columns={4} spacing={0} mt={10}>
          <AspectRatio ratio={1 / 1}>
            <Box bg="gray.400" height="80px"></Box>
          </AspectRatio>
          <AspectRatio ratio={1 / 1}>
            <Box bg="gray.600" height="80px"></Box>
          </AspectRatio>
          <AspectRatio ratio={1 / 1}>
            <Box bg="gray.500" height="80px"></Box>
          </AspectRatio>
          <AspectRatio ratio={1 / 1}>
            <Box bg="gray.400" height="80px"></Box>
          </AspectRatio>
          <AspectRatio ratio={1 / 1}>
            <Box bg="gray.600" height="80px"></Box>
          </AspectRatio>
          <AspectRatio ratio={1 / 1}>
            <Box bg="gray.500" height="80px"></Box>
          </AspectRatio>
          <AspectRatio ratio={1 / 1}>
            <Box bg="gray.400" height="80px"></Box>
          </AspectRatio>
          <AspectRatio ratio={1 / 1}>
            <Box bg="gray.600" height="80px"></Box>
          </AspectRatio>
        </SimpleGrid>
      </ContentConstrainer>
    </FullSection>
  );
}
