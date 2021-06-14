import { extendTheme } from "@chakra-ui/react";

import config from "./attributes/config";
import styles from "./attributes/styles";
import fonts from "./attributes/fonts";
import Button from "./attributes/Button";
import FullSection from "./attributes/fullsection";

const theme = extendTheme({
  config,
  fonts,
  styles,
  components: {
    Button,
    FullSection,
  },
});

export default theme;
