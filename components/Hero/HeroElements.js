import { Heading, Text, Flex, Stack, Box, Spacer } from "@chakra-ui/react";

export default function HeroElements() {
  return (
    <>
      <Stack flexDir="column">
        <Flex flexDir="column">
          <Spacer />
          <Heading as="h1" size="4xl" mb="2.5rem">
            Inspired Design
          </Heading>
          <Text marginBottom="1rem" fontSize="3xl" lineHeight={8}>
            Make a great first impression.
          </Text>
          <Text fontSize="3xl" lineHeight={8}>
            Reach your customers and close the sale.
          </Text>
        </Flex>
        <Box>Take A Look!</Box>
      </Stack>

      {/* <ChakraNextImage
        position="absolute"
        zIndex="1"
        right="-20rem"
        top="-19rem"
        src="/images/site/YellowLightBulb.svg"
        constrain={false}
        imgWidth={1150}
        imgHeight={1150}
        display={{ base: "none", lg: "inline-block" }}
      /> */}
    </>
  );
}
