import { width } from "../stylevars";

const fullsection = {
  // The parts of the component
  parts: ["container", "constrainer"],
  // The base styles for each part
  baseStyle: {
    container: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      flexDir: "column",
      _last: { flex: "1 1 auto" },
      pt: { base: "2.5rem", sm: "5rem", md: "5rem" },
      pb: { base: "2.5rem", sm: "5rem", md: "5rem" },
      // border: "1px",
      // borderColor: "white",
    },
    constrainer: {
      display: "flex",
      flexDir: "column",
      width: width,

      h: "100%",
    },
  },
  // The size styles for each part
  sizes: {
    sm: {
      constrainer: {
        fontSize: "5rem",
      },
    },
    md: {
      constrainer: {
        fontSize: "7rem",
      },
    },
    lg: {
      constrainer: {
        fontSize: "10rem",
      },
    },
    xl: {
      constrainer: {
        fontSize: "15rem",
      },
    },
  },
  // The variant styles for each part
  variants: {
    fullNoGrow: {
      container: { _last: { flex: "0 1 auto" } },
    },
    hero: {
      container: {
        overflow: "hidden",
      },
      constrainer: {
        display: "inline-block",
        color: "white",
      },
    },
    heroFull: {
      container: {
        overflow: "hidden",
        py: { base: "2.5rem", sm: "5rem", md: "0rem" },
        height: { base: "10rem", sm: "20rem", lg: "100vh" },
        minHeight: "20rem",
        maxHeight: "100vh",
      },
      constrainer: {
        display: "inline-block",
        color: "white",
        mt: { sm: "7rem", md: "0rem" },
      },
    },
    constrained: {
      container: {
        bg: "transparent",
      },
    },
    center: {
      constrainer: {},
    },
    constrainedBox: {
      container: {
        _last: {
          pb: "2.5rem",
        },
      },
      constrainer: {
        mt: "2.5rem",
        p: "2.5rem",
        borderRadius: "2xl",
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: { variant: "" },
};

export default fullsection;
