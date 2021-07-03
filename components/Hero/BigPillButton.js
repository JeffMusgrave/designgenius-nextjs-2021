import { Heading, Box } from "@chakra-ui/react";
import NextLink from "next/link";
export default function BigPillButton(props) {
  return (
    <NextLink href={props.href}>
      <Box
        display={{ base: "none", lg: "inline-block" }}
        as="button"
        px={{ sm: "2.5 rem", md: "4rem", lg: "5rem" }}
        borderRadius="full"
        bg="prince.300"
        cursor="pointer"
        transition="0.1s ease-in-out"
        _hover={{ background: "prince.200" }}
        _active={{
          bg: "prince.700",
          borderColor: "prince.900",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgb(147, 110, 233), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
        whiteSpace={{ base: "wrap", lg: "nowrap" }}
      >
        <Heading as="h2">{props.children}</Heading>
      </Box>
    </NextLink>
  );
}
