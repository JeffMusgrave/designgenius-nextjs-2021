import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container hero={<HomeHero />}>
      <Head>
        <title>Design Genius</title>
        <meta name="description" content="Design Genius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio />
      <About />
      <Contact />
    </Container>
  );
}

function HomeHero() {
  return (
    <Hero>
      <Heading as="h1" size="4xl">
        Inspired Design
      </Heading>
      <Heading as="h2">Graphic Design that makes you look good!</Heading>
    </Hero>
  );
}
