import { Heading, Flex, VStack, Text, Image } from "@chakra-ui/react";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import ContactForm from "./ContactForm";

export default function ContactComponent(props) {
  return (
    <FullSectionComponent light={props.light} dark={props.dark}>
      <ContentConstrainer display="flex" alignItems="center">
        <VStack
          align="stretch"
          width={{ base: "100%", md: "clamp(25rem, 40vw, 40rem)" }}
          pt={{ base: "0", md: "10rem" }}
        >
          <Heading
            variant="section"
            as="h2"
            fontSize="32pt"
            mb="5rem"
            id={props.id}
            textAlign="center"
          >
            Let's work together
          </Heading>
          <ContactForm />
        </VStack>
      </ContentConstrainer>
    </FullSectionComponent>
  );
}
