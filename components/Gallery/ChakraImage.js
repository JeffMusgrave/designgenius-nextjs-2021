import { chakra } from "@chakra-ui/react";
import ChakraNextImage from "../ChakraNextImage";

export default function ChakraImage({
  e,
  idx,
  thumbs,
  altVals,
  ratio,
  borderRadius = "xl",
  borderWidthVar = null,
  borderColorVar = null,
  transformVar = null,
}) {
  return (
    <>
      <chakra.a
        href={e.default.src}
        display="block"
        cursor="pointer"
        overflow="hidden"
        borderRadius={borderRadius}
        transition="transform 0.1s"
        transitionTimingFunction="ease-in-out"
        _hover={{
          transform: transformVar,
          boxShadow:
            borderColorVar &&
            borderWidthVar &&
            `0 0 0 ${borderWidthVar} ${borderColorVar[1]}`,
        }}
        // outlineColor={borderColorVar && borderColorVar[0]}
        // outlineWidth={borderWidthVar && borderWidthVar}
        boxShadow={
          borderColorVar &&
          borderWidthVar &&
          `0 0 0 ${borderWidthVar} ${borderColorVar[0]}`
        }
      >
        <ChakraNextImage
          src={thumbs[idx]}
          alt={altVals[idx].alt}
          ratio={ratio}
        />
      </chakra.a>
    </>
  );
}
