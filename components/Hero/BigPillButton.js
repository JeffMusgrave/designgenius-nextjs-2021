import { Heading, Box, useColorModeValue, DarkMode } from "@chakra-ui/react";
export default function BigPillButton(props) {
  const bgColor = useColorModeValue("prince.900", "punch.500");
  return (
    <Box
      display="inline-block"
      minH="100%"
      as="a"
      href={props.href}
      borderRadius="full"
      bg={bgColor}
      cursor="pointer"
      transition="0.1s ease-in-out"
      _hover={{ background: "prince.400" }}
      _active={{
        bg: "prince.700",
        borderColor: "prince.900",
      }}
      mt={{ base: "2.5rem", lg: "0" }}
      w="min-content"
      _focus={{
        boxShadow:
          "0 0 1px 2px rgb(147, 110, 233), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
      py={{ base: "1.75rem", lg: "0" }}
      px={{ base: "2.5rem", md: "4rem", lg: "5rem" }}
      whiteSpace="nowrap"
    >
      <Heading
        fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
        as="h2"
        color="white"
        fontWeight="300"
        display="grid"
        placeItems="center"
        minH="100%"
      >
        {props.children}
      </Heading>
    </Box>
  );
}
