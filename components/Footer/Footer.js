import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import { Box } from "@chakra-ui/react";

export default function FooterComponent(props) {
  return (
    <FullSection variant="fullNoGrow" py="2.5rem" bg="gray.900">
      <ContentConstrainer>
        <Box>Created by Design Genius. &copy; 2021</Box>
      </ContentConstrainer>
    </FullSection>
  );
}
