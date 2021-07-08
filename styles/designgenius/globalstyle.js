import { Global, css } from "@emotion/react";
// import { useColorMode } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function GlobalStyle({ children }) {
  // const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("#322659", "white");
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            justify-content: center;
          }
          body {
            color: ${bgColor};
          }
        `}
      />
      {children}
    </>
  );
}
