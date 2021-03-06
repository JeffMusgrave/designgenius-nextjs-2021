import Head from "next/head";
import { Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Container from "../Container";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";

export default function StandardPageLayout({ children, frontMatter }) {
  const router = useRouter();
  const slug = router.asPath.replace("/info", "");

  return (
    <Container>
      <Head>
        <title>{frontMatter.title} - Design Genius</title>
        <meta name="description" content="Design Genius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullSectionComponent variant="postPage">
        <ContentConstrainer
          display="flex"
          flexDir="column"
          justifyContent="flex-end"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
            {frontMatter.readingTime.text}
          </Text>

          {children}
        </ContentConstrainer>
      </FullSectionComponent>
    </Container>
  );
}
