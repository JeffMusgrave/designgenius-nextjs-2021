import { Heading, Text, Flex, Spacer } from "@chakra-ui/react";
import BigPillButton from "./BigPillButton";
export default function HeroElements() {
  return (
    <Flex flexDir={{ base: "column", lg: "row" }}>
      <Flex flexDir="column" width="100%">
        <Heading
          as="h1"
          fontSize={["34pt", "50pt", "clamp(60pt,  3.5vw, 80pt)"]}
          mb="2.5rem"
          lineHeight="1em"
          fontWeight="300"
        >
          Inspired Design
        </Heading>
        <Text
          marginBottom="1rem"
          fontSize={{ base: "xl", md: "3xl" }}
          lineHeight={{ base: 6, md: 8 }}
        >
          Visually appealing and easy to use designs that showcase your products
          and services.
        </Text>
      </Flex>
      <Spacer />
      <BigPillButton href="#design">Take A Look!</BigPillButton>
    </Flex>
  );
}
