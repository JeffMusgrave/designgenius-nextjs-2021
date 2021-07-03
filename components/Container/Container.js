import { Flex } from "@chakra-ui/layout";
import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

export default function ContainerComponent(props) {
  return (
    <Flex minH="100vh" flexDir="column" w="100%" alignItems="center">
      <Header />
      {props.hero}
      <Main>{props.children}</Main>
      <Footer light="salmon.900" dark="#0D0128" />
    </Flex>
  );
}
