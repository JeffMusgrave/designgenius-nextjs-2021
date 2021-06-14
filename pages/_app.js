import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/designgenius/theme";
import GlobalStyle from "../styles/designgenius/globalstyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}
