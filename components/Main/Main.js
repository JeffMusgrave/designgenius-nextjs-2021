import { Flex } from "@chakra-ui/layout";

export default function MainComponent(props) {
  return (
    <Flex as="main" flex="1" flexDir="column" py="0" width="100%">
      {props.children}
    </Flex>
  );
}
