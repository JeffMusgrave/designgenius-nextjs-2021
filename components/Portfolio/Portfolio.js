import { SimpleGrid, AspectRatio, Box, Heading } from "@chakra-ui/react";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import Gallery from "../Gallery";

import { DPI } from "../../data/imagelist/imagelist";

export default function PortfolioComponent(props) {
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
      {/* <FullSection bg="gray.600">
        <ContentConstrainer>
          <Heading as="h3" variant="body">
            Album Art
          </Heading>
          <Gallery dir={albumArtDir} images={albumArtImages} />
        </ContentConstrainer>
      </FullSection> */}
    </>
  );
}
