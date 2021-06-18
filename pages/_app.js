import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/designgenius/theme";
import GlobalStyle from "../styles/designgenius/globalstyle";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import SimpleReactLightbox from "simple-react-lightbox-pro";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <GlobalStyle>
        <SimpleReactLightbox>
          <MDXProvider components={MDXComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </SimpleReactLightbox>
      </GlobalStyle>
    </ChakraProvider>
  );
}
