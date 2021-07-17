import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/designgenius/theme";
import GlobalStyle from "../styles/designgenius/globalstyle";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <GlobalStyle>
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </GlobalStyle>
    </ChakraProvider>
  );
}
