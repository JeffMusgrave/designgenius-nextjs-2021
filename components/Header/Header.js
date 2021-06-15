import {
  useColorModeValue,
  useDisclosure,
  Flex,
  HStack,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import ColourModeSwitch from "../ColorModeSwitch";
import LogoSection from "./LogoSection";
import { NavDesktop, NavMobile } from "./Navigation";
import { bigHero, width } from "../../styles/designgenius/stylevars";

export default function HeaderComponent(props) {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const headerPos = bigHero === true ? "fixed" : "sticky";
  const widthSize = bigHero === true ? "100%" : width;

  return (
    <Box
      as="header"
      w={widthSize}
      py={4}
      position={headerPos}
      top="0"
      zIndex="10"
      // bg="gray.900"
      opacity="0.95"
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
