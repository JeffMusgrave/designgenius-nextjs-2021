const Button = {
  sizes: { xl: { h: "56px", fontSize: "lg", px: "32px" } },
  variants: {
    ghost: (props) => ({
      fontFamily: props.navigation ? "Paytone One" : "Open Sans",
    }),
  },
};

export default Button;
