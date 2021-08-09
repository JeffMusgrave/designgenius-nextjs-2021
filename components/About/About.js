import { Text, Heading, Box, VStack, Stack, Image } from "@chakra-ui/react";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";

export default function AboutComponent(props) {
  return (
    <FullSectionComponent light={props.light} dark={props.dark} id="youredge">
      <ContentConstrainer alignItems="center">
        <VStack
          flex="2"
          direction="column"
          align="stretch"
          spacing="1rem"
          w={{ base: "100%", md: "60%" }}
          py={{ base: "0", md: "10rem" }}
        >
          <Heading variant="section" as="h2" id={props.id}>
            Your Edge
          </Heading>
          <Text fontSize="xl">
            A professionally designed brochure, business card, logo, and web
            site can attract customers and add profit to your bottom line. I can
            help your business stand out with a design that customers can
            remember and trust.
          </Text>
          <Text fontSize="xl">
            <a href="#contact">Contact me</a> now for a free consultation. I
            will help you make a great first impression, so that you can attract
            customers, grow your sales, and increase your profits.
          </Text>
        </VStack>
      </ContentConstrainer>
    </FullSectionComponent>
  );
}
