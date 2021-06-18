import { SimpleGrid, AspectRatio, Box, Heading } from "@chakra-ui/react";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import Gallery from "../Gallery";

export default function PortfolioComponent(props) {
  const dir = "/images/portfolio/web";
  const images = [
    "arXivConcept",
    "NelsonDailyStyle",
    "PML",
    "ReebeeContestSpread",
    "SmallGraphicsSpread",
    "UniversitySPread",
    "WhitewaterStyle",
  ];

  return (
    <>
      <FullSection>
        <ContentConstrainer>
          <Heading as="h2" variant="section">
            Our Work
          </Heading>
          <Heading as="h3" variant="body">
            Digital Design
          </Heading>
          <Gallery dir={dir} images={images} />
        </ContentConstrainer>
      </FullSection>
    </>
  );
}
