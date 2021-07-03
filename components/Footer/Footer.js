import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import { Flex, Text, Image } from "@chakra-ui/react";

export default function FooterComponent(props) {
  return (
    <FullSectionComponent
      variant="fullNoGrow"
      py="2.5rem"
      light={props.light}
      dark={props.dark}
    >
      <ContentConstrainer>
        <Flex w="100%" alignItems="center" flexDir="column">
          <Image
            src="/images/site/YellowLightBulb.svg"
            w="clamp(10rem, 20vw, 40rem)"
          />
          <Text fontSize="sm">Created by Design Genius. &copy; 2021</Text>
        </Flex>
      </ContentConstrainer>
    </FullSectionComponent>
  );
}
