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
    ...rest
  } = props;

  function Img() {
    return (
      <Image
        layout={!imgWidth && "fill"}
        objectFit={objectFit}
        width={imgWidth}
        height={imgHeight}
        src={src}
        alt={alt}
        srl_gallery_image="true"
      />
    );
  }

  if (constrain) {
    return (
      <AspectRatio ratio={ratio}>
        <Img />
      </AspectRatio>
    );
  } else {
    return (
      <Box {...rest}>
        <Img />
      </Box>
    );
  }
}
