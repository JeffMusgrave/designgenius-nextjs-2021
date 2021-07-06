import { Heading } from "@chakra-ui/react";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import Gallery from "../Gallery";

export default function PortfolioComponent(props) {
  console.log(props.borderRadius);
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
  const { light, dark, id, heading = null, layout = null, children } = props;

  switch (layout) {
    case "single":
      return (
        <>
          <FullSectionComponent light={light} dark={dark} pb="0">
            <ContentConstrainer>
              {heading && (
                <Heading variant="section" as="h2" size="lg" id={id}>
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
              <Heading variant="section" as="h2" size="lg" id={id}>
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
