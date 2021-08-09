import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import { Flex, Text, Image, Link, useColorMode } from "@chakra-ui/react";
import Contact from "../Contact";

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
            <Image
              src="/images/site/YellowLightBulb.svg"
              w="clamp(10rem, 20vw, 40rem)"
            />
            <Text fontSize="sm">
              Created by{" "}
              <Link
                color="punch.500"
                fontWeight="bold"
                href="https://www.jeffmusgrave.com/"
              >
                Jeff Musgrave
              </Link>{" "}
              &copy; 2021
            </Text>
          </Flex>
        </ContentConstrainer>
      </FullSectionComponent>
    </>
  );
}
