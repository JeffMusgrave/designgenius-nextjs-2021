import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function ChakraNextImage(props) {
  const { src, alt, ...rest } = props;
  return (
    <Box position="relative" {...rest}>
      <Image objectFit="cover" layout="fill" src={src} alt={alt} />
    </Box>
  );
}
