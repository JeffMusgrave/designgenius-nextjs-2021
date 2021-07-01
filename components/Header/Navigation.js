import { HStack, VStack } from "@chakra-ui/react";
import PageList from "./PageList";

export function NavDesktop() {
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
}

export function NavMobile(props) {
  const { bg, mobileNav } = props;
  // console.log("NAV MOBILE mobileNav", mobileNav);
  return (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={{ base: mobileNav.isOpen ? "flex" : "none", md: "none" }}
      // p={2}
      pb={4}
      m={2}
      bg={bg}
      h="100vh"
      spacing={20}
      justifyContent="center"
    >
      <PageList mobileNav={mobileNav} />
    </VStack>
  );
}
