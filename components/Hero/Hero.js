import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import { Box, GridItem, Image, useColorMode } from "@chakra-ui/react";
import HeroElements from "./HeroElements";
import useWindowSize from "../../lib/useWindowSize";

export default function HeroComponent(props) {
  const size = useWindowSize();
  const pad = Math.max(0, (30 * (1000 - size.height)) / 1000);
  const { colorMode } = useColorMode();
  // const winH = size && size.height > 1000;
  // const winW = size && size.width > 350;

  return (
    <FullSectionComponent
      variant="heroFull"
      bgColor={colorMode === "dark" ? "salmon.500" : "#A6FFFA"}
      // backgroundSize="100% 100%"
      // backgroundPosition="0px 0px,0px 0px"
      // backgroundImage="linear-gradient(179deg, #FE5C41FF 49%, #febc41 100%)"
      {...props}
      minH={{ md: "35rem" }}
    >
      <ContentConstrainer>
        <GridItem
          display="grid"
          alignContent="center"
          justifyContent={{ base: "flex-end", lg: "flex-start" }}
          rowStart="1"
          rowEnd="8"
          colStart="1"
          colEnd="2"
          {...props}
        >
          <Box
            id="LIGHT"
            h="clamp(10rem, 100vh, 70rem)"
            minW={{ base: "20rem", sm: "30rem", lg: "70rem" }}
            display="flex"
            justifyContent={{ base: "flex-end", lg: "flex-start" }}
            pl={{ base: "auto", lg: `${pad}rem` }}
            mr={{ base: "-30vw", sm: "auto" }}
          >
            <Image
              alignItems="center"
              mixBlendMode={colorMode === "dark" && "overlay"}
              opacity={colorMode === "dark" ? "1" : "0.25"}
              src="/images/site/BlueLightBulb.svg"
              dropShadow="lg"
            />
          </Box>
        </GridItem>

        <GridItem
          zIndex="3"
          size={size}
          rowStart={{ base: "2", lg: "4" }}
          rowEnd={{ base: "7", lg: "6" }}
          colStart="1"
          colEnd="2"
          alignSelf={{ base: "center", lg: "flex-end", xl: "flex-start" }}
          w="inherit"
          {...props}
        >
          <HeroElements />
          {props.children}
        </GridItem>
      </ContentConstrainer>
      <Box
        display={{ base: "none", sm: "inline-block" }}
        // bgColor={colorMode === "dark" ? "prince.500" : "#C8FE41"}
        background={{
          md: "rgba(107,70,193,1)",
          lg: "linear-gradient(90deg, rgba(67,30,153,1) 0%, rgba(107,70,193,1) 50%);",
        }}
        position="absolute"
        right="0"
        width={{ base: "12vw", lg: "55vw" }}
        minH="100vh"
        height="100%"
        boxShadow={{
          md: "none",
          lg: "inset 3px 0 5px #19044b, inset 3px 0 20px #240a5f, inset 3px 0 50px #290877, inset 3px 0 100px #37128f",
        }}
        // backgroundImage="/images/site/bg.jpg"
        // backgroundSize="cover"
        // boxShadow="inset 0 0 0 1000px rgba(107, 70, 193,.9);"
      />
    </FullSectionComponent>
  );
}
