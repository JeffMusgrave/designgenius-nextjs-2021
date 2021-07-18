import { extendTheme } from "@chakra-ui/react";

import config from "./attributes/config";
import styles from "./attributes/styles";
import colors from "./attributes/colors";
import fonts from "./attributes/fonts";
import Button from "./attributes/button";
import fullsection from "./attributes/fullsection";
import Heading from "./attributes/heading";

const theme = extendTheme({
  config,
  fonts,
  styles,
  colors,
  components: {
    Button,
    Heading,
    fullsection,
  },
});

export default theme;
