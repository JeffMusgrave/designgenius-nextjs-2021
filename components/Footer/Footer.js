import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import { Flex, Text, Box, Link, useColorMode } from "@chakra-ui/react";
import Contact from "../Contact";
import YellowLightbulb from "./YellowLightbulb";

export default function FooterComponent(props) {
  const { colorMode } = useColorMode();
  return (
    <>
      <Contact
        id="contact"
        light="white"
        dark="#0D0128"
        descHeadingColor={colorMode === "dark" && "#9769FF"}
      />
      <FullSectionComponent
        variant="fullNoGrow"
        light={props.light}
        dark={props.dark}
      >
        <ContentConstrainer>
          <Flex w="100%" alignItems="center" flexDir="column">
            <Box w="clamp(20rem, 20vw, 40rem)" pb="5rem">
              <YellowLightbulb />
            </Box>
            <Text fontSize="sm">
              Created by{" "}
              <Link
                color="punch.500"
                fontWeight="bold"
                href="https://www.jeffmusgrave.com/"
              >
                Jeff Musgrave
              </Link>{" "}
              &copy; 2021. View site code on{" "}
              <Link
                color="punch.500"
                fontWeight="bold"
                href="https://github.com/JeffMusgrave/designgenius-nextjs-2021"
              >
                Github.
              </Link>
            </Text>
            <Text fontSize="xs" mt="1rem">
              <Link
                color="punch.500"
                // fontWeight="bold"
                href="/sitemap.xml"
              >
                Sitemap
              </Link>
            </Text>
          </Flex>
        </ContentConstrainer>
      </FullSectionComponent>
    </>
  );
}
