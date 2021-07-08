import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../styles/designgenius/theme";
import { ColorModeScript } from "@chakra-ui/react";

export default class MyDocument extends NextDocument {
  render() {
    console.log(theme.config.initialColorMode);
    return (
      <Html lang="en">
        <Head />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Paytone+One&display=swap"
          rel="stylesheet"
        />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
