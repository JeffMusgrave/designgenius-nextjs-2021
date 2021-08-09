import { Text, Heading, VStack, Link } from "@chakra-ui/react";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";

export default function AboutComponent(props) {
  return (
    <FullSectionComponent
      // light={props.light}
      // dark={props.dark}
      backgroundColor="#f4364c"
      backgroundImage={`url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff4459' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
      id="youredge"
    >
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
          <Text fontSize="2xl">
            A professionally designed brochure, business card, logo, and web
            site can attract customers and add profit to your bottom line. I can
            help your business stand out with a design that customers can
            remember and trust.
          </Text>
          <Text fontSize="2xl">
            <Link fontWeight="900" href="#contact">
              Contact me
            </Link>{" "}
            now for a free consultation. I will help you make a great first
            impression, so that you can attract customers, grow your sales, and
            increase your profits.
          </Text>
        </VStack>
      </ContentConstrainer>
    </FullSectionComponent>
  );
}
