import { Heading, VStack, Text, Image } from "@chakra-ui/react";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import ContactForm from "./ContactForm";

export default function ContactComponent(props) {
  const { light, dark, id, descHeadingColor } = props;
  return (
    <FullSectionComponent light={light} dark={dark}>
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
            mb="1rem"
            id={id}
            textAlign="center"
            color={descHeadingColor}
          >
            Let's work together
          </Heading>
          <Text pb="5rem" textAlign="center">
            Like what you see? Get in touch!
          </Text>
          <ContactForm />
        </VStack>
      </ContentConstrainer>
    </FullSectionComponent>
  );
}
