import { AspectRatio, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function ChakraNextImage(props) {
  const {
    src,
    alt,
    ratio,
    constrain = true,
    imgWidth = null,
    imgHeight = null,
    objectFit = "cover",
    borderRadius = "xl",
    ...rest
  } = props;

  function Img() {
    const regex = /(\.svg)/gm;
    return (
      <Image
        layout={!imgWidth && "fill"}
        objectFit={objectFit}
        width={imgWidth}
        height={imgHeight}
        src={src}
        alt={alt}
        srl_gallery_image="true"
        placeholder={!regex.test(src) && "blur"}
      />
    );
  }

  if (constrain) {
    return (
      <AspectRatio ratio={ratio} overflow="hidden" borderRadius={borderRadius}>
        <Img />
      </AspectRatio>
    );
  } else {
    return (
      <Box {...rest} overflow="hidden" borderRadius={borderRadius}>
        <Img />
      </Box>
    );
  }
}
