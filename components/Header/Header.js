import {
  useColorModeValue,
  useDisclosure,
  Flex,
  HStack,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ColourModeSwitch from "../ColorModeSwitch";
import LogoSection from "./LogoSection";
import { NavDesktop, NavMobile } from "./Navigation";
import { bigHero, width } from "../../styles/designgenius/stylevars";
import { motion, useViewportScroll } from "framer-motion";

export default function HeaderComponent(props) {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const headerPos = bigHero === true ? "fixed" : "sticky";
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
      py={4}
      position={headerPos}
      top="0"
      zIndex="10"
      bg={scrollDown ? "gray.900" : "whiteAlpha"}
      opacity={scrollDown ? "0.95" : "1"}
    >
      <Flex
        w={width}
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
      >
        <LogoSection />
        <HStack display="flex" alignItems="center" spacing={1}>
          <NavDesktop />
          <NavMobile mobileNav={mobileNav} bg={bg} />

          <ColourModeSwitch />
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            fontSize="20px"
            color={useColorModeValue("gray.800", "white")}
            variant="ghost"
            icon={<AiOutlineMenu />}
            onClick={mobileNav.onOpen}
          />
        </HStack>
      </Flex>
    </Box>
  );
}
