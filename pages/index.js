import { useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { DPI, AA } from "../data/imagelist/imagelist";
import colors from "../styles/designgenius/attributes/colors";

const { prince, salmon, punch, glacier } = colors;

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Container hero={<Hero />}>
      <Head>
        <title>Design Genius</title>
        <meta name="description" content="Design Genius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio
        id="design"
        galleryType="description"
        images={DPI}
        ratio={{ base: 21 / 9, md: 16 / 9 }}
        columns={{ base: "1", sm: "2", md: "2" }}
        light={["white", "black"]}
        dark="#150833"
        borderRadius={{ base: "1rem", md: "2.5rem" }}
        layout="single"
        descHeadingColor={colorMode === "dark" ? "#9769FF" : "#4C823D"}
        // secHeadingColor={colorMode === "light" && "#00A9A5"}
        borderWidthVar="2rem"
        borderColorVar={
          colorMode === "light" ? ["white", "#A6FFFA"] : ["#25144D", punch[500]]
        }
      />
      <Portfolio
        id="albumart"
        heading={"Album Art"}
        images={AA}
        ratio={1}
        columns={{ base: "2", sm: "3", md: "3" }}
        light="#C8FE41"
        dark="salmon.500"
        spacing={{ base: "1.5rem", sm: "2rem", md: "8rem" }}
        borderWidthVar="1.75rem"
        borderColorVar={
          colorMode === "light"
            ? [prince[500], "#A6FFFA"]
            : [salmon[300], prince[500]]
        }
      />
      <Contact
        id="contact"
        light="white"
        dark="#0D0128"
        descHeadingColor={colorMode === "dark" && "#9769FF"}
      />
    </Container>
  );
}
