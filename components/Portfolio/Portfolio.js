import { Heading } from "@chakra-ui/react";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import Gallery from "../Gallery";

export default function PortfolioComponent(props) {
  const { images, ...rest } = props;
  return (
    <LayoutSwitch {...rest}>
      <Gallery
        images={images[0]}
        thumbs={images[1]}
        altVals={images[2]}
        {...rest}
      />
    </LayoutSwitch>
  );
}

function LayoutSwitch(props) {
  const {
    light,
    dark,
    id,
    heading = null,
    secHeadingColor = null,
    layout = null,
    children,
  } = props;

  switch (layout) {
    case "single":
      return (
        <>
          <FullSectionComponent
            light={light}
            dark={dark}
            pb="0"
            pt={{ base: !heading && "0rem", md: "5rem" }}
          >
            <ContentConstrainer
              id={!heading && id}
              sx={{ scrollMarginTop: "100px", scrollSnapMargin: "100px" }}
            >
              {heading && (
                <Heading
                  id={id}
                  variant="section"
                  as="h2"
                  color={secHeadingColor}
                >
                  {heading}
                </Heading>
              )}
            </ContentConstrainer>
          </FullSectionComponent>
          {children}
        </>
      );
      break;

    default:
      return (
        <FullSectionComponent light={light} dark={dark}>
          <ContentConstrainer>
            {heading && (
              <Heading variant="section" id={id} as="h2" size="3xl">
                {heading}
              </Heading>
            )}
            {children}
          </ContentConstrainer>
        </FullSectionComponent>
      );
      break;
  }
}
