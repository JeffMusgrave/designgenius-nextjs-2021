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
          <FullSecCompWrapper single={true} {...props}>
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
          </FullSecCompWrapper>
          {children}
        </>
      );
      break;

    default:
      return (
        <FullSecCompWrapper {...props}>
          <ContentConstrainer>
            {heading && (
              <Heading variant="section" id={id} as="h2" size="3xl">
                {heading}
              </Heading>
            )}
            {children}
          </ContentConstrainer>
        </FullSecCompWrapper>
      );
      break;
  }
}

function FullSecCompWrapper(props) {
  const {
    light,
    dark,
    bgImg,
    bgClr,
    customKeyframes,
    customAnimation,
    single,
    children,
    padB = null,
  } = props;

  const animBG = customKeyframes
    ? keyframes`${customKeyframes}`
    : keyframes` 
	0% {
		transform: translate(0, -100px)
	}
	100% {
    transform: translate(0, -128px)
	} `;

  const anim = customAnimation ? customAnimation : `1.5s linear infinite`;

  return (
    <FullSectionComponent
      light={light}
      dark={dark}
      overflow="hidden"
      position="relative"
      pb={!padB ? "0rem" : padB}
      pt={{ base: "2.5rem", md: "5rem" }}
      _before={{
        content: '" "',
        position: "absolute",
        width: "100%",
        height: "220%",
        background: `${bgImg} 0 0 repeat`,
        backgroundColor: bgClr,
        animation: `${animBG} ${anim}`,
        zIndex: "-1",
      }}
    >
      {children}
    </FullSectionComponent>
  );
}
