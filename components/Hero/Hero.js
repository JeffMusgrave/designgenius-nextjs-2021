import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import { useColorMode } from "@chakra-ui/react";

export default function HeroComponent(props) {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "gray.50",
    dark: "gray.900",
  };
  return (
    <FullSection
      variant="fullNoGrow"
      minH={{ base: "10rem", sm: "20rem", md: "30rem", lg: "40rem" }}
      bg={bgColor[colorMode]}
      // backgroundImage="url(/images/bg.jpg)"
      backgroundSize="cover"
      pt="0"
    >
      <ContentConstrainer
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
        mt="7.5rem"
      >
        {props.children}
      </ContentConstrainer>
    </FullSection>
  );
}
