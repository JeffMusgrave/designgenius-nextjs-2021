import { Text, Flex, Heading, Box, Stack } from "@chakra-ui/react";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";

export default function AboutComponent(props) {
  return (
    <FullSection>
      <ContentConstrainer display="flex" justifyContent="center">
        <Box w={{ base: "100%", md: "60%" }}>
          <Heading as="h2">About</Heading>
          <Stack
            mt={{ base: 10, md: "0" }}
            spacing={4}
            direction={{ base: "column-reverse", md: "row" }}
          >
            <Text fontSize="2xl" flex="2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              voluptates maiores dolor possimus earum dolorum perferendis odio
              provident sed aliquid ut accusantium deleniti nobis, minus
              molestias praesentium inventore quas incidunt!
            </Text>
            <Box flex="1" minH="10rem" bg="aquamarine" borderRadius="2xl" />
          </Stack>
        </Box>
      </ContentConstrainer>
    </FullSection>
  );
}
