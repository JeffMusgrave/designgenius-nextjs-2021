import { chakra } from "@chakra-ui/react";
import ChakraNextImage from "../ChakraNextImage";

export default function ChakraImage({
  e,
  idx,
  thumbs,
  altVals,
  ratio,
  borderRadius,
}) {
  return (
    <>
      <chakra.a
        href={e.default.src}
        cursor="pointer"
        overflow="hidden"
        // borderRadius={borderRadius}
        transition="transform 0.1s"
        transitionTimingFunction="ease-in-out"
        _hover={{ transform: "scale(1.1)" }}
      >
        <ChakraNextImage
          src={thumbs[idx]}
          alt={altVals[idx].alt}
          ratio={ratio}
          borderRadius={borderRadius}
        />
      </chakra.a>
    </>
  );
}
