import { Heading, Text, useColorMode } from "@chakra-ui/react";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import Gallery from "../Gallery";
import Featured from "../Featured";

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
          <Featured
            direction={false}
            src="/images/portfolio/digitalprint/arXivConcept.jpg"
            alt="arXiv Concept"
            thumb="/images/portfolio/digitalprint/thumbs/arXivConcept_200.jpg"
            heading="Take a look"
            ratio={16 / 9}
            borderRadius="3xl"
          >
            <Text>Some text here</Text>
          </Featured>
          <Gallery images={DPI[0]} thumbs={DPI[1]} altVals={DPI[2]} />
        </ContentConstrainer>
      </FullSection>
      <FullSection bg={bgColor[colorMode]}>
        <ContentConstrainer>
          <Heading as="h3" variant="body">
            Album Art
          </Heading>
          <Gallery
            images={AA[0]}
            thumbs={AA[1]}
            altVals={AA[2]}
            borderRadius="none"
            spacing="0"
          />
        </ContentConstrainer>
      </FullSection>
    </>
  );
}
