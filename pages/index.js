import Head from "next/head";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
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
        galleryType="description"
        images={DPI}
        ratio={{ base: 21 / 9, md: 16 / 9 }}
        columns={{ base: "1", sm: "2", md: "2" }}
        light="white"
        dark="#150833"
        borderRadius="random"
        layout="single"
      />
      <Portfolio
        id="albumart"
        heading={"Album Art"}
        images={AA}
        ratio={1}
        columns={{ base: "2", sm: "2", md: "3" }}
        light="white"
        dark="salmon.500"
        spacing="5rem"
        borderRadius="random"
      />
      <Contact id="contact" light="white" dark="#0D0128" />
    </Container>
  );
}
