import { Heading, Text } from "@chakra-ui/react";
import Container from "../Container";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";

export default function SEOPage({ metaTitle, heading, children }) {
  return (
    <Container>
      <Head>
        <title>{metaTitle} - Design Genius</title>
        <meta name="description" content="Design Genius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullSectionComponent variant="postPage">
        <ContentConstrainer
          display="flex"
          flexDir="column"
          justifyContent="flex-end"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl"></Heading>
          <Text
            fontSize="sm"
            color="gray.500"
            minWidth="100px"
            mt={[2, 0]}
          ></Text>

          {children}
        </ContentConstrainer>
      </FullSectionComponent>
    </Container>
  );
}
