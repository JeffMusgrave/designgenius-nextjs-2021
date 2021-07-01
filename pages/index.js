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
        id="portfolio"
        heading={"Digital & Print"}
        images={DPI}
        ratio={{ base: 21 / 9, md: 16 / 9 }}
        columns={{ base: "1", sm: "2", md: "3" }}
      />
      <About id="about" />
      <Portfolio
        heading={"Album Art"}
        images={AA}
        ratio={1}
        columns={{ base: "2", sm: "3", md: "6" }}
      />
      <Contact id="contact" />
    </Container>
  );
}
