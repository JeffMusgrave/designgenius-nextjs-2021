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
  const winH = size && size.height > 1000;
  const winW = size && size.width > 350;
  const gradient = `
    background-size: 100% 100%;
    background-position: 0px 0px,0px 0px,0px 0px;
    background-image: radial-gradient(40% 40% at 2% 97%, #576ED2 0%, #FFFFFF00 100%), radial-gradient(60% 60% at 97% 12%, #5E2A9F 0%, #FFFFFF00 100%), linear-gradient(125deg, #2B3EC9 1%, #5825B2 55%);
  `;

  return (
    <FullSectionComponent
      variant="heroFull"
      light="gray.200"
      dark="gray.900"
      bgColor={colorMode === "dark" ? "salmon.500" : "white"}
      bgGradient={colorMode === "light" ? gradient : ""}
      {...props}
    >
      <ContentConstrainer>
        <HeroGridItem
          display={{ base: "none", sm: "grid" }}
          alignContent="center"
          justifyContent={{ base: "flex-end", lg: "flex-start" }}
        >
          <Box
            id="LIGHT"
            h="clamp(10rem, 100vh, 70rem)"
            minW={{ base: "20rem", sm: "30rem", lg: "70rem" }}
            display="flex"
            justifyContent={{ base: "flex-end", lg: "flex-start" }}
            pl={{ base: "0", lg: `${pad}rem` }}
          >
            <Image
              alignItems="center"
              mixBlendMode="soft-light"
              src="/images/site/BlueLightBulb.svg"
            />
          </Box>
        </HeroGridItem>
        <HeroGridItem
          zIndex="3"
          size={size}
          rowS={{ base: "2", sm: "6", lg: winH ? "4" : "5" }}
          rowE={{ base: "8", sm: "7", lg: winH ? "5" : "6" }}
          winW={winW}
          width="inherit"
        >
          <HeroElements />
          {props.children}
        </HeroGridItem>
      </ContentConstrainer>
      <Box
        display={{ base: "none", sm: "inline-block" }}
        bg="prince.500"
        position="absolute"
        right="0"
        width={{ base: "12vw", lg: "55vw" }}
        height="100vh"
      />
    </FullSectionComponent>
  );
}

function HeroGridItem(props) {
  const { rowS = "1", rowE = "8", winW = true } = props;

  if (winW) {
    return (
      <GridItem
        rowStart={rowS}
        rowEnd={rowE}
        colStart="1"
        colEnd="2"
        {...props}
      >
        {props.children}
      </GridItem>
    );
  } else {
    return <>{props.children}</>;
  }
}
