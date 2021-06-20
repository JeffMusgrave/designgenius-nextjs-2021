import { AspectRatio, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function ChakraNextImage(props) {
  const { src, alt, ratio, ...rest } = props;

  return (
    <AspectRatio ratio={ratio}>
      <Image
        layout="fill"
        src={src}
        alt={alt}
        srl_gallery_image="true"
        // placeholder="blur"
      />
    </AspectRatio>
  );
}
