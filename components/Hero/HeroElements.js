import { Heading, Text, Flex, Spacer } from "@chakra-ui/react";
import ChakraNextImage from "../ChakraNextImage";

export default function HeroElements() {
  return (
    <>
      <Flex
        flexDir="column"
        position="relative"
        zIndex="3"
        h="100%"
        dropShadow=""
      >
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

      <ChakraNextImage
        position="absolute"
        zIndex="1"
        right="-20rem"
        top="-19rem"
        src="/images/site/YellowLightBulb.svg"
        constrain={false}
        imgWidth={1150}
        imgHeight={1150}
        display={{ base: "none", lg: "inline-block" }}
      />
      <ChakraNextImage
        position="absolute"
        zIndex="0"
        right="17rem"
        top="-13rem"
        src="/images/site/BlueLightBulb.svg"
        constrain={false}
        imgWidth={700}
        imgHeight={1000}
        opacity="0.25"
        display={{ base: "none", xl: "inline-block" }}
      />
    </>
  );
}
