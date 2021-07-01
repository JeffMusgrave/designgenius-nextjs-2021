import { Text, Heading, Box, VStack, Stack } from "@chakra-ui/react";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";

export default function AboutComponent(props) {
  return (
    <FullSection light="gray.50" dark="gray.900">
      <ContentConstrainer alignItems="center">
        <Stack
          w={{ base: "100%", md: "60%" }}
          py={{ base: "0", md: "10rem" }}
          spacing="24px"
          direction={{ base: "column", sm: "row" }}
        >
          <VStack flex="2" direction="column" align="stretch">
            <Heading variant="section" as="h2" id={props.id}>
              About
            </Heading>
            <Text fontSize="xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              voluptates maiores dolor possimus earum dolorum perferendis odio
              provident sed aliquid ut accusantium deleniti nobis, minus
              molestias praesentium inventore quas incidunt!
            </Text>
          </VStack>

          <Box flex="1" minH="clamp(5rem, 20vh, 10rem)" bg="blue.50" />
        </Stack>
      </ContentConstrainer>
    </FullSection>
  );
}
