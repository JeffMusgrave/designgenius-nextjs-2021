import { Heading, Stack, VStack, Text } from "@chakra-ui/react";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import ContactForm from "./ContactForm";

export default function ContactComponent(props) {
  return (
    <FullSectionComponent light="gray.50" dark="gray.900">
      <ContentConstrainer display="flex">
        <Stack
          spacing={{ base: "2.5rem", md: "5rem" }}
          align="stretch"
          w="100%"
          direction={{ base: "column", md: "row" }}
        >
          <VStack align="stretch" flex="3">
            <Heading variant="section" as="h2" id={props.id}>
              Let's work together
            </Heading>
            <Text>
              Are you ready to take your product or service to the next level?
            </Text>
          </VStack>

          <ContactForm flex="4" />
        </Stack>
        {/* <ChakraNextImage
        position="absolute"
        zIndex="1"
        right="-20rem"
        top="-19rem"
        src="/images/site/YellowLightBulb.svg"
        constrain={false}
        imgWidth={1150}
        imgHeight={1150}
        display={{ base: "none", lg: "inline-block" }}
      /> */}
      </ContentConstrainer>
    </FullSectionComponent>
  );
}
