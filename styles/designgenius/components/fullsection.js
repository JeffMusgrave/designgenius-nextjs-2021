import {
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  Box,
  Flex,
} from "@chakra-ui/react";

export function FullSection(props) {
  const { size, variant, children, ...rest } = props;

  const styles = useMultiStyleConfig("FullSection", { size, variant });
  return (
    <Box as="section" __css={styles.container} {...rest}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Box>
  );
}
export function ContentConstrainer(props) {
  const styles = useStyles();
  return <Flex __css={styles.constrainer} {...props} />;
}
