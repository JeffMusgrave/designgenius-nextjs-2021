import { Flex } from "@chakra-ui/layout";
import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { width } from "../../styles/designgenius/stylevars";

const ContainerComponent = (props) => {
  return (
    <Flex minH="100vh" flexDir="column" w="100%" alignItems="center">
      <Header />
      {props.hero}

      <Main>{props.children}</Main>
      <Footer />
    </Flex>
  );
};

export default ContainerComponent;

// <Flex minH="100vh" flexDir="column" w="100%" alignItems="center">
// <Header />
// {props.hero}
// <Flex flex="1" w={width} flexDir="column">
//   <Main>{props.children}</Main>
//   <Footer />
// </Flex>
// </Flex>
