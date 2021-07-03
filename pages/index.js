import Head from "next/head";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import { DPI, AA } from "../data/imagelist/imagelist";

export default function Home() {
  return (
    <Container hero={<Hero />}>
      <Head>
        <title>Design Genius</title>
        <meta name="description" content="Design Genius" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio
        id="design"
        heading={"Digital & Print"}
        images={DPI}
        ratio={{ base: 21 / 9, md: 16 / 9 }}
        columns={{ base: "1", sm: "2", md: "3" }}
        light="glacier.50"
        dark="punch.500"
      />
      {/* <About id="about" light="glacier.50" dark="salmon.500" /> */}
      <Portfolio
        id="albumart"
        heading={"Album Art"}
        images={AA}
        ratio={1}
        columns={{ base: "2", sm: "3", md: "6" }}
        light="glacier.50"
        dark="salmon.500"
      />
      <Contact id="contact" light="glacier.50" dark="#0D0128" />
    </Container>
  );
}
