import { Flex } from "@chakra-ui/layout";

const MainComponent = (props) => {
  return (
    <Flex as="main" flex="1" flexDir="column">
      {props.children}
    </Flex>
  );
};

export default MainComponent;
