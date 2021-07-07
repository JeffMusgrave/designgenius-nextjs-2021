import { Heading, Text, VStack, Box, Stack } from "@chakra-ui/react";
import { darken } from "@chakra-ui/theme-tools";
import ChakraImage from "./ChakraImage";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";

export default function ImageWithDescription({ images, altVals, ...rest }) {
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
            spacing="6rem"
            key={`imgdesc-${idx}`}
            pt={{ sm: "0rem", md: idx > 0 && "5rem" }}
            pb={{ sm: "0rem", md: "5rem" }}
          >
            <VStack align="stretch" flexGrow="1" zIndex="2">
              <Heading
                fontSize="3rem"
                letterSpacing="tight"
                lineHeight="none"
                mb="2rem"
              >
                {altVals[idx].title}
              </Heading>
              <Text fontSize="3xl">{altVals[idx].description}</Text>
            </VStack>
            <Box minW={{ base: "100%", md: "60%" }}>
              <ChakraImage e={e} idx={idx} altVals={altVals} {...rest} />
            </Box>
          </Stack>
        </FullSectionSwitch>
      ))}
    </>
  );
}

function FullSectionSwitch({ light, dark, children, layout, idx }) {
  switch (layout) {
    case "single":
      return (
        <FullSectionComponent
          light={idx % 2 === 0 ? light : darken(light, 2)}
          dark={idx % 2 === 0 ? dark : darken(dark, 2)}
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
