import { HStack, VStack, CloseButton } from "@chakra-ui/react";
import PageList from "./PageList";

export const NavDesktop = () => {
  return (
    <>
      <HStack
        spacing={1}
        mr={1}
        color="brand.500"
        display={{ base: "none", md: "inline-flex" }}
      >
        <PageList />
      </HStack>
    </>
  );
};

export const NavMobile = ({ mobileNav, bg }) => {
  return (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={{ base: mobileNav.isOpen ? "flex" : "none", md: "none" }}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      h="100vh"
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

      <PageList />
    </VStack>
  );
};
