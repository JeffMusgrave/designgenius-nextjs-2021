import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      color: mode("#1E0F42", "whiteAlpha.900")(props),
      bg: mode("white", "#150833")(props),
    },
  }),
};

export default styles;
