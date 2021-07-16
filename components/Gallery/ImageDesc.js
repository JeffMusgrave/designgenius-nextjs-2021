import { Heading, Text, VStack, Box, Stack } from "@chakra-ui/react";
import ChakraImage from "./ChakraImage";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import colourAltSwitch from "../../lib/colourAltSwitch";

export default function ImageWithDescription({
  images,
  altVals,
  descHeadingColor = null,
  ...rest
}) {
  return (
    <>
      {images.map((e, idx) => (
        <FullSectionSwitch
          {...rest}
          idx={idx}
          key={`desc-${altVals[idx].title}`}
        >
          <Stack
            direction={{
              base: "column",
              md: idx % 2 === 0 ? "row-reverse" : "row",
            }}
            spacing={{ base: "1rem", md: "6rem" }}
            key={`imgdesc-${idx}`}
            pt={{ sm: "0rem", md: idx > 0 && "5rem" }}
            pb={{ sm: "0rem", md: "5rem" }}
          >
            <VStack align="stretch" flexGrow="1" zIndex="2">
              <Heading
                letterSpacing="tight"
                lineHeight="none"
                mb={{ base: "0", md: "2rem" }}
                color={descHeadingColor}
                variant="section"
                fontSize={{ base: "4xl", md: "5xl" }}
              >
                {altVals[idx].title}
              </Heading>
              <Text fontSize={{ base: "xl", md: "2xl" }}>
                {altVals[idx].description}
              </Text>
            </VStack>
            <Box minW={{ base: "100%", md: "40%" }}>
              <ChakraImage e={e} idx={idx} altVals={altVals} {...rest} />
            </Box>
          </Stack>
        </FullSectionSwitch>
      ))}
    </>
  );
}

function FullSectionSwitch({
  light = null,
  dark = null,
  children,
  layout,
  idx,
}) {
  switch (layout) {
    case "single":
      return (
        <FullSectionComponent
          light={colourAltSwitch(light, "lighten", 4, idx)}
          dark={colourAltSwitch(dark, "darken", 2, idx)}
        >
          <ContentConstrainer>{children}</ContentConstrainer>
        </FullSectionComponent>
      );
      break;

    default:
      return <>{children}</>;
      break;
  }
}
