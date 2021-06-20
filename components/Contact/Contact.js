import { Heading, Stack, VStack, Text } from "@chakra-ui/react";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import ContactForm from "./ContactForm";

export default function ContactComponent(props) {
  return (
    <FullSection>
      <ContentConstrainer display="flex">
        <Stack
          spacing={{ base: "2.5rem", sm: "5rem" }}
          align="stretch"
          w="100%"
          direction={{ base: "column", sm: "row" }}
        >
          <VStack align="stretch" flex="3">
            <Heading as="h2">Let's work together</Heading>
            <Text>
              We'd love to hear from you or something. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Sunt omnis voluptates ratione
              inventore dignissimos? Doloremque quasi culpa eligendi aliquid
              amet, assumenda alias perspiciatis molestias sint unde dolorum
              sunt error quo?
            </Text>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              officiis nulla quasi sit tempore repellendus saepe, minus corrupti
              debitis ex ipsam magnam quibusdam voluptate libero eos,
              necessitatibus laudantium alias optio.
            </Text>
          </VStack>

          <ContactForm flex="4" />
        </Stack>
      </ContentConstrainer>
    </FullSection>
  );
}
