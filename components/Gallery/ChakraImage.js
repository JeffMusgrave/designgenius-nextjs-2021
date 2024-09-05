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
  const regex = /(youtube)/gm;
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
          transform: { base: "", md: transformVar },
          boxShadow: {
            base: "",
            md:
              borderColorVar &&
              borderWidthVar &&
              `0 0 0 ${borderWidthVar} ${borderColorVar[1]}`,
          },
        }}
        boxShadow={{
          base: "",
          md:
            borderColorVar &&
            borderWidthVar &&
            `0 0 0 ${borderWidthVar} ${borderColorVar[0]}`,
        }}
      >
        {/* temporary fix to get videos to load */}
        {regex.test(e.default.src) ? (
          <img
            src={thumbs[idx].default.src}
            width="100%"
            style={{
              aspectRatio: "16 / 9",
              objectFit: "cover",
              layout: "fill",
            }}
          />
        ) : (
          <ChakraNextImage
            src={thumbs[idx].default.src}
            alt={altVals[idx].alt}
            ratio={ratio}
          />
        )}
      </chakra.a>
    </>
  );
}
