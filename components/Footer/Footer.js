import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import { Box, useColorMode } from "@chakra-ui/react";

export default function FooterComponent(props) {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "gray.100",
    dark: "gray.900",
  };

  return (
    <FullSection variant="fullNoGrow" py="2.5rem" bg={bgColor[colorMode]}>
      <ContentConstrainer>
        <Box>Created by Design Genius. &copy; 2021</Box>
      </ContentConstrainer>
    </FullSection>
  );
}
