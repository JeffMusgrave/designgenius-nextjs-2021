import Head from "next/head";
import { Heading, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Container from "../components/Container";

export default function StandardPageLayout({ children, frontMatter }) {
  const router = useRouter();
  const slug = router.asPath.replace("/blog", "");
  return (
    <Container>
      <Head>
        <title>${slug} - Design Genius</title>
        <meta name="description" content="Design Genius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        as="article"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
        w="100%"
      >
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          {frontMatter.title}
        </Heading>
        <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
          {frontMatter.readingTime.text}
        </Text>
      </Flex>
    </Container>
  );
}
