import { Heading, useColorMode } from "@chakra-ui/react";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import Gallery from "../Gallery";

import { DPI, AA } from "../../data/imagelist/imagelist";

export default function PortfolioComponent(props) {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "gray.50",
    dark: "gray.900",
  };

  return (
    <>
      <FullSection>
        <ContentConstrainer>
          <Heading as="h2" variant="section">
            Our Work
          </Heading>
          <Heading as="h3" variant="body">
            Digital &#38; Print
          </Heading>
          <Gallery images={DPI[0]} thumbs={DPI[1]} />
        </ContentConstrainer>
      </FullSection>
      <FullSection bg={bgColor[colorMode]}>
        <ContentConstrainer>
          <Heading as="h3" variant="body">
            Album Art
          </Heading>
          <Gallery images={AA[0]} thumbs={AA[1]} />
        </ContentConstrainer>
      </FullSection>
    </>
  );
}
