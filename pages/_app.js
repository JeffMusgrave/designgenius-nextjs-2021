import { ChakraProvider } from "@chakra-ui/react";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import theme from "../styles/designgenius/theme";
import GlobalStyle from "../styles/designgenius/globalstyle";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} />
      <GlobalStyle>
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </GlobalStyle>
    </ChakraProvider>
  );
}
