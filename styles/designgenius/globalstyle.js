import { Global, css } from "@emotion/react";

export default function GlobalStyle({ children }) {
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
        `}
      />
      {children}
    </>
  );
}
