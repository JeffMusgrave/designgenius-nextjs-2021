import { Heading, keyframes } from "@chakra-ui/react";
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
    bgClr,
    bgImg,
    customKeyframes,
    customAnimation,
  } = props;

  const animBG = customKeyframes
    ? keyframes`${customKeyframes}`
    : keyframes` 
	0% {
		transform: translate(0, 0)
	}
	100% {
    transform: translate(0, -50%)
	} `;

  const anim = customAnimation ? customAnimation : `60s linear infinite`;

  switch (layout) {
    case "single":
      return (
        <>
          <FullSectionComponent
            light={light}
            dark={dark}
            pb="0"
            pt={{ base: !heading && "0rem", md: "5rem" }}
            overflow="hidden"
            _before={{
              content: '" "',
              position: "absolute",
              width: "200%",
              height: "100%",
              background: `${bgImg} 0 0 repeat`,
              backgroundColor: bgClr,
              animation: `${animBG} ${anim}`,
              zIndex: "-1",
            }}
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
        <FullSectionComponent
          light={light}
          dark={dark}
          overflow="hidden"
          _before={{
            content: '" "',
            position: "absolute",
            width: "200%",
            height: "100%",
            background: `${bgImg} 0 0 repeat`,
            backgroundColor: bgClr,
            animation: `${animBG} ${anim}`,
            zIndex: "-1",
          }}
        >
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
