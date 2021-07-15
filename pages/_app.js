import { ChakraProvider } from "@chakra-ui/react";
// import { useState, useEffect } from "react";
// import ImageContext from "../data/imagelist/ImageContext";
// import { DPI, AA } from "../data/imagelist/imagelist";
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

  // const [data, setData] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const res = await { DPI, AA };
  //     setData(res);
  //   })();
  // }, []);

  // if (data) {
  //   return (
  //     <ChakraProvider resetCSS theme={theme}>
  //       <GlobalStyle>
  //         <MDXProvider components={MDXComponents}>
  //           {/* <ImageContext.Provider value={data}> */}
  //           <Component {...pageProps} />
  //           {/* </ImageContext.Provider> */}
  //         </MDXProvider>
  //       </GlobalStyle>
  //     </ChakraProvider>
  //   );
  // } else return null;
}
