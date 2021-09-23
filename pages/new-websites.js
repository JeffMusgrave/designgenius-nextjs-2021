import Head from "next/head";
import {
  Heading,
  Text,
  Box,
  GridItem,
  useColorMode,
  keyframes,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../styles/designgenius/components/FullSectionComponent";
import { render } from "react-dom";

export default function NewWebsiteSEOPage() {
  return (
    <Container>
      <Head>
        <title>New Websites for as low as $50 - Design Genius</title>
        <meta name="description" content="Design Genius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroComponent />
      <PageText />
    </Container>
  );
}

function PageText() {
  return (
    <FullSectionComponent>
      <ContentConstrainer
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
      >
        <BigText>
          Are you looking to establish your brand online? Social media platforms
          come and go, but your website is forever!{" "}
        </BigText>
        <BigText>
          Let me help you get started with your online web presence today.{" "}
        </BigText>
        <BigText>Contact me for a free quote</BigText>
      </ContentConstrainer>
    </FullSectionComponent>
  );
}

function BigText({ children }) {
  return (
    <Text minWidth="100px" mt={[2, 8]} fontSize="xl">
      {children}
    </Text>
  );
}

function HeroComponent(props) {
  const { colorMode } = useColorMode();

  const animBG = keyframes`
	0% {
		transform: translate(-100px)
	}
	100% {
    transform: translate(-200px)
	}
  `;

  const animLightbulb = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
      },
    },
    complete: {
      x: 0,
      opacity: 1,
    },
  };

  const MotionBox = motion(Box);
  const [animFinished, setAnimFinished] = useState(false);

  return (
    <FullSectionComponent
      bgColor={colorMode === "dark" ? "salmon.500" : "#A6FFFA"}
      {...props}
      minH={{ md: "35rem" }}
      variant="postPage"
    >
      <ContentConstrainer>
        <GridItem
          display="grid"
          alignContent="center"
          justifyContent={{ base: "flex-end", lg: "flex-start" }}
          rowStart="1"
          rowEnd="8"
          colStart="1"
          colEnd="2"
          {...props}
          mixBlendMode={colorMode === "dark" && "overlay"}
          mr={{ base: "-30vw", sm: "-15vw", md: "-10vw", lg: "auto" }}
        ></GridItem>

        <GridItem
          zIndex="3"
          rowStart={{ base: "2", lg: "4" }}
          rowEnd={{ base: "7", lg: "6" }}
          colStart="1"
          colEnd="2"
          alignSelf={{ base: "center", lg: "flex-end", xl: "center" }}
          w="inherit"
          {...props}
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            New Websites for as low as $50!
          </Heading>
          {props.children}
        </GridItem>
      </ContentConstrainer>
      <Box
        display={{ base: "none", sm: "inline-block" }}
        position="relative"
        width={{ base: "5vw", lg: "20vw", xl: "30vw" }}
        minH="40vh"
        height="100%"
        overflow="hidden"
        borderRadius="3xl"
        mt="10rem"
        mr="0rem"
        _before={{
          content: '" "',
          position: "absolute",
          width: "200vw",
          height: "100%",
          background: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%235937ab' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E") 0 0 repeat`,
          backgroundColor: "prince.900",
          animation: `${animBG} 2s linear infinite`,
        }}
      />
    </FullSectionComponent>
  );
}
