import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "../styles/designgenius/theme";
import GlobalStyle from "../styles/designgenius/globalstyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: false,
        }}
      >
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
