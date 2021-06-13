import { VisuallyHidden, Link, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { useColorMode } from "@chakra-ui/react";

import Logo from "./Logo";
const LogoSection = () => {
  return (
    <NextLink href="/">
      <Link
        minW="8rem"
        title="Design Genius Home Page"
        display="flex"
        alignItems="center"
      >
        <Box w="8rem">
          <Logo />
        </Box>

        <VisuallyHidden>Design Genius</VisuallyHidden>
      </Link>
    </NextLink>
  );
};

// const Logo = () => {
//   const { colorMode } = useColorMode();
//   const iconColor = {
//     light: "#4d4d4d",
//     dark: "#fff",
//   };
//   return (
//     <img
//       style={{ fill: iconColor[colorMode] }}
//       src="/logo.svg"
//       alt="Design Genius logo"
//       aria-label="Design Genius!"
//     />
//   );
// };

export default LogoSection;
