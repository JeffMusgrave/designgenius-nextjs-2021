import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import { useColorMode } from "@chakra-ui/react";
import HeroElements from "./HeroElements";

export default function HeroComponent({
  bgImage,
  bgSize = "cover",
  bgGradient,
  bgColor,
  children,
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <FullSection
      variant="hero"
      minH={{ base: "10rem", sm: "20rem", md: "30rem", lg: "45rem" }}
      light="gray.200"
      dark="gray.900"
      bgImage={`url(${bgImage})`}
      bgGradient={bgGradient}
      bgSize={bgSize}
      bgColor={bgColor}
      pt="0"
      bgColor={colorMode === "dark" ? `#FE5C41` : "white"}
      bgGradient={
        colorMode === "light"
          ? `background-size: 100% 100%;
      background-position: 0px 0px,0px 0px,0px 0px;
      background-image: radial-gradient(40% 40% at 2% 97%, #576ED2 0%, #FFFFFF00 100%), radial-gradient(60% 60% at 97% 12%, #5E2A9F 0%, #FFFFFF00 100%), linear-gradient(125deg, #2B3EC9 1%, #5825B2 55%);`
          : " "
      }
    >
      <ContentConstrainer mt="7.5rem" position="relative">
        <HeroElements />
        {children}
      </ContentConstrainer>
    </FullSection>
  );
}
