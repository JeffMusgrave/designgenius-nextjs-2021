import Head from "next/head";
import { Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import Container from "../components/Container";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../styles/designgenius/components/FullSectionComponent";

export default function StandardPageLayout({ children }) {
  return (
    <Container>
      <Head>
        <title>Your Edge - Design Genius</title>
        <meta name="description" content="Design Genius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullSectionComponent variant="fullNoGrow">
        <ContentConstrainer
          display="flex"
          flexDir="column"
          justifyContent="flex-end"
          mt={{ base: "7.5rem", md: "12.5rem" }}
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Your Edge
          </Heading>
          <Text minWidth="100px" mt={[2, 8]}>
            A professionally designed brochure, business card, logo, and web
            site can attract customers and add profit to your bottom line. I can
            help your business stand out with an exciting, distinctive,
            memorable design. Contact me now for a free consultation.
          </Text>

          {children}
        </ContentConstrainer>
      </FullSectionComponent>
    </Container>
  );
}
