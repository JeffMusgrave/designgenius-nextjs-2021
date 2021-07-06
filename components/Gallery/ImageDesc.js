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
        <FullSectionSwitch {...rest} idx={idx}>
          <Stack
            direction={{
              base: "column",
              md: idx % 2 === 0 ? "row-reverse" : "row",
            }}
            spacing={12}
            key={`imgdesc-${idx}`}
            pt={idx > 0 && "5rem"}
            pb="5rem"
          >
            <VStack align="stretch" flexGrow="1">
              <Heading
                fontSize="4rem"
                letterSpacing="tight"
                lineHeight="none"
                mb="2rem"
              >
                {altVals[idx].title}
              </Heading>
              <Text fontSize="2xl">{altVals[idx].description}</Text>
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
