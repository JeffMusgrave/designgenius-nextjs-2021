import { VisuallyHidden, Link, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "./Logo";

export default function LogoSection() {
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
}
