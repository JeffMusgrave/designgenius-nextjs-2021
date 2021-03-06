import { useState } from "react";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import { Box, GridItem, useColorMode, keyframes } from "@chakra-ui/react";
import HeroElements from "./HeroElements";
import useWindowSize from "../../lib/useWindowSize";
import LightBulb from "./LightBulb";
import { motion, useIsPresent } from "framer-motion";

export default function HeroComponent(props) {
  const size = useWindowSize();
  const pad = Math.max(0, (30 * (1000 - size.height)) / 1000);
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

  const isPresent = useIsPresent();

  return (
    <FullSectionComponent
      variant="heroFull"
      bgColor={colorMode === "dark" ? "sunny.500" : "#A6FFFA"}
      {...props}
      minH={{ md: "35rem" }}
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
          pl={{ base: "auto", lg: `${pad}rem` }}
          mr={{ base: "-30vw", sm: "-15vw", md: "-10vw", lg: "auto" }}
        >
          <MotionBox
            id="LIGHT"
            h="clamp(10rem, 100vh, 70rem)"
            minW={{ base: "20rem", sm: "30rem", lg: "70rem" }}
            display="flex"
            justifyContent={{ base: "flex-end", lg: "flex-start" }}
            sx={{
              maskImage: "linear-gradient(to left, transparent 0%, black 100%)",
            }}
            // variants={animLightbulb}
            // initial={isPresent && !animFinished ? "initial" : "complete"}
            // animate={isPresent && !animFinished ? "animate" : "complete"}
            // onAnimationComplete={() => {
            //   setAnimFinished(true);
            // }}
            drag={size.width >= 992 ? true : false}
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          >
            <LightBulb />
          </MotionBox>
        </GridItem>

        <GridItem
          zIndex="3"
          size={size}
          rowStart={{ base: "2", lg: "4" }}
          rowEnd={{ base: "7", lg: "6" }}
          colStart="1"
          colEnd="2"
          alignSelf={{ base: "center", lg: "flex-end", xl: "flex-start" }}
          w="inherit"
          {...props}
        >
          <HeroElements />
          {props.children}
        </GridItem>
      </ContentConstrainer>
      <Box
        display={{ base: "none", sm: "inline-block" }}
        position="absolute"
        right="0"
        width={{ base: "5vw", lg: "59vw", xl: "55vw" }}
        minH="100vh"
        height="100%"
        overflow="hidden"
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
