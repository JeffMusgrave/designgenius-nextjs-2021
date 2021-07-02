import {
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  Box,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

export function fullsection(props) {
  const { colorMode } = useColorMode();
  const { size, variant, children, light, dark, ...rest } = props;
  const bgColor = {
    light: light,
    dark: dark,
  };

  const styles = useMultiStyleConfig("Fullsection", { size, variant });
  return (
    <Box
      as="section"
      __css={styles.container}
      bg={bgColor[colorMode]}
      {...rest}
    >
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Box>
  );
}
export function ContentConstrainer(props) {
  const styles = useStyles();
  return <Flex __css={styles.constrainer} {...props} />;
}
