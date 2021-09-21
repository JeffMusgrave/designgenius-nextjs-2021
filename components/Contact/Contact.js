import { Heading, VStack, Text, Box, Stack } from "@chakra-ui/react";
import Image from "next/image";
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
          <Profile />
          <ContactForm />
        </VStack>
      </ContentConstrainer>
    </FullSectionComponent>
  );
}

function Profile() {
  return (
    <Stack
      direction={{ base: "column", xl: "row" }}
      spacing="2rem"
      pt="2.5rem"
      pb="5rem"
      align="stretch"
    >
      <Box
        m="0 auto"
        borderRadius="full"
        minW="12rem"
        maxW="12rem"
        minH="12rem"
        maxH="12rem"
        overflow="hidden"
        pos="relative"
        backgroundColor="prince.500"
      >
        <Image
          layout="fill"
          src="/images/site/jeff-musgrave-960.jpg"
          alt="photo of Jeff Musgrave"
        />
      </Box>
      <VStack spacing="1rem">
        <Text fontSize="lg" fontWeight="300">
          Hello! My name is Jeff, and I'm an expert in the art and technology of
          visual presentation.
        </Text>
        <Text fontSize="lg" fontWeight="300">
          Whatever your design, production, or communication challenge, I can
          create a compelling solution. Contact me with the form below to learn
          more.
        </Text>
      </VStack>
    </Stack>
  );
}
