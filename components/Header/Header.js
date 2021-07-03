import {
  useColorModeValue,
  useDisclosure,
  Flex,
  HStack,
  Box,
  IconButton,
  useColorMode,
  DarkMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ColourModeSwitch from "../ColorModeSwitch";
import LogoSection from "./LogoSection";
import { NavDesktop, NavMobile } from "./Navigation";
import { bigHero, width } from "../../styles/designgenius/stylevars";

export default function HeaderComponent(props) {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "gray.100",
    dark: "salmon.500",
  };
  const mobileNav = useDisclosure();
  const widthSize = bigHero === true ? "100%" : width;

  const [scrollDown, setScrollDown] = useState(false);

  //Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      const rem = parseInt(getComputedStyle(document.documentElement).fontSize);
      let y = window.scrollY;
      return y > 1 * rem ? setScrollDown(true) : setScrollDown(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, [scrollDown]);

  return (
    <Box
      as="header"
      w={widthSize}
      py={{ base: 3, md: scrollDown ? 2 : 20 }}
      position="fixed"
      top="0"
      zIndex="10"
      bg={scrollDown ? bgColor[colorMode] : "whiteAlpha"}
      opacity={scrollDown ? "0.95" : "1"}
      transition="0.2s"
    >
      <Flex
        w={width}
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
      >
        <LogoSection />
        <HStack
          display="flex"
          alignItems="center"
          spacing={{ base: "0", md: "1" }}
        >
          <NavDesktop />
          <NavMobile
            mobileNav={mobileNav}
            bg="gray.800"
            // bg={bgColor[colorMode]}
          />

          <ColourModeSwitch />
          <DarkMode>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              borderRadius="lg"
              size="lg"
              // color={useColorModeValue("gray.800", "white")}
              variant="ghost"
              icon={
                mobileNav.isOpen ? (
                  <HiX aria-label="Close menu" />
                ) : (
                  <HiMenu aria-label="Open menu" />
                )
              }
              onClick={mobileNav.onToggle}
            />
          </DarkMode>
        </HStack>
      </Flex>
    </Box>
  );
}
