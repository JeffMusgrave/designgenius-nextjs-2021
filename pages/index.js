import Head from "next/head";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import {
  Heading,
  Text,
  Box,
  Flex,
  Stack,
  VStack,
  Grid,
  Spacer,
  GridItem,
} from "@chakra-ui/react";
import { DPI, AA } from "../data/imagelist/imagelist";
import Image from "next/image";

export default function Home() {
  return (
    <Container hero={<HomeHero />}>
      <Head>
        <title>Design Genius</title>
        <meta name="description" content="Design Genius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio
        heading={"Digital & Print"}
        images={DPI}
        ratio={{ base: 21 / 9, md: 16 / 9 }}
        columns={{ base: "1", sm: "2", md: "3" }}
      />
      <About />
      <Portfolio
        heading={"Album Art"}
        images={AA}
        ratio={1}
        columns={{ base: "2", sm: "3", md: "6" }}
      />
      <Contact id="contact" />
    </Container>
  );
}

function HomeHero() {
  return (
    <Hero
      // bgColor="#FE5C41"
      bgGradient="background-size: 100% 100%;
      background-position: 0px 0px,0px 0px,0px 0px;
      background-image: radial-gradient(40% 40% at 2% 97%, #576ED2 0%, #FFFFFF00 100%), radial-gradient(60% 60% at 97% 12%, #5E2A9F 0%, #FFFFFF00 100%), linear-gradient(125deg, #2B3EC9 1%, #5825B2 55%);"
    >
      <VStack align="stretch" position="relative" zIndex="3" h="100%">
        <Spacer />
        <Heading as="h1" size="4xl" mb={10}>
          Inspired Design
        </Heading>
        <Text fontSize="4xl">Make a great first impression.</Text>
        <Text fontSize="4xl">Reach your customers and close the sale.</Text>
      </VStack>

      <Box position="absolute" zIndex="0" right="-21rem" top="-19rem">
        <Image src="/images/site/GroupBulbs.svg" width={1150} height={1150} />
      </Box>
    </Hero>
  );
}
