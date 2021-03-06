import { Text, Heading, VStack, Link } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";

export default function AboutComponent(props) {
  const animBG = keyframes`
	0% {
		transform: translate(-252px, -226px)
	}
	100% {
    transform: translate(-200px, -200px)
	}
  `;

  // const dropShadow =
  //   "drop-shadow(0 0 4px #ea2c42) drop-shadow(0 0 10px #ea2c42) drop-shadow(0 0 20px #ea2c42) drop-shadow(0 0 30px #ea2c42) drop-shadow(0 0 40px #ea2c42) drop-shadow(0 0 60px #ea2c42) drop-shadow(0 0 100px #ea2c42)";

  return (
    <FullSectionComponent
      position="relative"
      backgroundColor="punch.700"
      _before={{
        content: '" "',
        position: "absolute",
        width: "400vw",
        height: "400vh",
        background: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23da0f26' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E") 0 0 repeat`,
        animation: `${animBG} 7s linear infinite`,
        zIndex: "0",
      }}
      id="youredge"
      overflow="hidden"
    >
      <ContentConstrainer alignItems="center">
        <VStack
          // color="#ff445a"
          flex="2"
          direction="column"
          align="stretch"
          spacing="1rem"
          w={{ base: "100%", md: "60%" }}
          py={{ base: "0", md: "10rem" }}
          zIndex="1"
        >
          <Heading variant="section" as="h2" id={props.id}>
            Your Edge
          </Heading>
          <Text fontSize="2xl">
            A professionally designed brochure, business card, logo, and web
            site can attract customers and add profit to your bottom line. I can
            help your business stand out with an exciting, distinctive,
            memorable design.
          </Text>
          <Text fontSize="2xl">
            <Link fontWeight="900" href="#contact">
              Contact me
            </Link>{" "}
            now for a free consultation.
          </Text>
        </VStack>
      </ContentConstrainer>
    </FullSectionComponent>
  );
}
