import { AspectRatio, Box } from "@chakra-ui/react";
import Image from "next/image";

function Img(props) {
  const {
    src,
    alt,
    imgWidth = null,
    imgHeight = null,
    objectFit = "cover",
  } = props;

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
      loading="eager"
      // placeholder={!regex.test(src) && "blur"}
    />
  );
}

export default function ChakraNextImage(props) {
  const { ratio, constrain = true, ...rest } = props;

  if (constrain) {
    return (
      <AspectRatio ratio={ratio} overflow="hidden">
        <Img {...props} />
      </AspectRatio>
    );
  } else {
    return (
      <Box {...rest} overflow="hidden">
        <Img {...props} />
      </Box>
    );
  }
}
