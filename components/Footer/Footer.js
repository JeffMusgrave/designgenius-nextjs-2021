import {
  Fullsection,
  ContentConstrainer,
} from "../../styles/designgenius/components/fullsection";
import { Box } from "@chakra-ui/react";

export default function FooterComponent(props) {
  return (
    <Fullsection
      variant="fullNoGrow"
      py="2.5rem"
      light="gray.200"
      dark="gray.900"
    >
      <ContentConstrainer>
        <Box>Created by Design Genius. &copy; 2021</Box>
      </ContentConstrainer>
    </Fullsection>
  );
}
