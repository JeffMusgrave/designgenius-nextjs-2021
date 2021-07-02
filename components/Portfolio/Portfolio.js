import { Heading } from "@chakra-ui/react";
import {
  Fullsection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import Gallery from "../Gallery";

export default function PortfolioComponent(props) {
  const { images, ratio, columns, spacing, light, dark, id, heading, outline } =
    props;
  return (
    <>
      <Fullsection light={light} dark={dark}>
        <ContentConstrainer>
          <Heading variant="section" as="h2" size="lg" id={id}>
            {heading}
          </Heading>
          <Gallery
            images={images[0]}
            thumbs={images[1]}
            altVals={images[2]}
            ratio={ratio}
            columns={columns}
            spacing={spacing}
            outline={outline}
          />
        </ContentConstrainer>
      </Fullsection>
    </>
  );
}
