import {
  Text,
  Heading,
  Box,
  VStack,
  Wrap,
  useColorMode,
} from "@chakra-ui/react";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";

export default function AboutComponent(props) {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "gray.100",
    dark: "gray.800",
  };
  return (
    <FullSection bg={bgColor[colorMode]}>
      <ContentConstrainer alignItems="center">
        <Wrap
          w={{ base: "100%", md: "60%" }}
          py={{ base: "0", md: "10rem" }}
          spacing="24px"
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack flex="2" direction="column" align="stretch">
            <Heading as="h2">About</Heading>
            <Text fontSize="xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              voluptates maiores dolor possimus earum dolorum perferendis odio
              provident sed aliquid ut accusantium deleniti nobis, minus
              molestias praesentium inventore quas incidunt!
            </Text>
          </VStack>

          <Box flex="1" minH="100%" bg="gray.800" />
        </Wrap>
      </ContentConstrainer>
    </FullSection>
  );
}
