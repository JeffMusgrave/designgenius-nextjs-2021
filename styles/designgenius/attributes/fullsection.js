import { width } from "../stylevars";

const FullSection = {
  // The parts of the component
  parts: ["container", "constrainer"],
  // The base styles for each part
  baseStyle: {
    container: {
      display: "flex",
      width: "100vw",
      alignItems: "center",
      bg: "red.200",
      flexDir: "column",
      _last: { flex: "1 1 auto" },
    },
    constrainer: {
      width: width,
      bg: "blue.600",
      h: "100%",
    },
  },
  // The size styles for each part
  sizes: {
    sm: {
      constrainer: {
        py: 5,
        fontSize: "5rem",
      },
    },
    md: {
      constrainer: {
        py: 7,
        fontSize: "7rem",
      },
    },
    lg: {
      constrainer: {
        py: 10,
        fontSize: "10rem",
      },
    },
    xl: {
      constrainer: {
        py: 15,
        fontSize: "15rem",
      },
    },
  },
  // The variant styles for each part
  variants: {
    fullNoGrow: {
      container: { _last: { flex: "0 1 auto" } },
    },
    constrained: {
      container: {
        bg: "transparent",
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: { variant: "" },
};

export default FullSection;
