import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import { Box, GridItem, Image, useColorMode } from "@chakra-ui/react";
import HeroElements from "./HeroElements";
import useWindowSize from "../../lib/useWindowSize";

export default function HeroComponent({
  bgImage,
  bgSize = "cover",
  bgGradient,
  bgColor,
  children,
}) {
  const size = useWindowSize();
  const pad = Math.max(0, (30 * (1000 - size.height)) / 1000);
  const { colorMode } = useColorMode();
  return (
    <FullSectionComponent
      position="relative"
      variant="heroFull"
      light="gray.200"
      dark="gray.900"
      bgImage={`url(${bgImage})`}
      bgGradient={bgGradient}
      bgSize={bgSize}
      bgColor={bgColor}
      bgColor={colorMode === "dark" ? "salmon.500" : "white"}
      bgGradient={
        colorMode === "light"
          ? `background-size: 100% 100%;
      background-position: 0px 0px,0px 0px,0px 0px;
      background-image: radial-gradient(40% 40% at 2% 97%, #576ED2 0%, #FFFFFF00 100%), radial-gradient(60% 60% at 97% 12%, #5E2A9F 0%, #FFFFFF00 100%), linear-gradient(125deg, #2B3EC9 1%, #5825B2 55%);`
          : " "
      }
    >
      <ContentConstrainer
        position="relative"
        display="grid"
        gridTemplateRows="1fr"
        gridTemplateColumns="1fr"
      >
        <GridItem
          alignSelf="center"
          rowStart="1"
          rowEnd="2"
          colStart="1"
          colEnd="2"
        >
          <Box
            id="LIGHT"
            h="clamp(10rem, 100vh, 70rem)"
            display={{ base: "none", xl: "flex" }}
            paddingLeft={`${pad}rem`}
          >
            <Image
              alignItems="center"
              mixBlendMode="soft-light"
              src="/images/site/BlueLightBulb.svg"
            />
          </Box>
        </GridItem>
        <GridItem
          alignSelf="center"
          rowStart="1"
          rowEnd="2"
          colStart="1"
          colEnd="2"
          zIndex="3"
        >
          <HeroElements />
          {children}
        </GridItem>
      </ContentConstrainer>
      <Box
        bg="prince.500"
        position="absolute"
        right="0"
        width="56vw"
        height="100vh"
      />
    </FullSectionComponent>
  );
}
