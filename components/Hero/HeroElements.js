import { Heading, Text, Flex, Stack, Spacer } from "@chakra-ui/react";
import BigPillButton from "./BigPillButton";
export default function HeroElements() {
  return (
    <>
      <Flex
        flexDir="row"
        pt={{ base: "10rem", sm: "0" }}
        pb={{ base: "2.5rem", sm: "0" }}
        flexDir={{ md: "column", lg: "row" }}
      >
        <Flex flexDir="column" width="100%">
          <Spacer />
          <Heading
            as="h1"
            size="4xl"
            fontSize={["34pt", "40pt", "50pt"]}
            mb="2.5rem"
          >
            Inspired Design
          </Heading>
          <Text marginBottom="1rem" fontSize="3xl" lineHeight={8}>
            Make a great first impression.
          </Text>
          <Text fontSize="3xl" lineHeight={8}>
            Reach your customers and close the sale.
          </Text>
        </Flex>
        <Spacer />
        <BigPillButton href="#portfolio">
          <Heading as="h2">Take A Look!</Heading>
        </BigPillButton>
      </Flex>
    </>
  );
}
