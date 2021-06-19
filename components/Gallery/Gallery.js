import { SimpleGrid, AspectRatio, Box } from "@chakra-ui/react";
import { SRLWrapper } from "simple-react-lightbox-pro";
import ChakraNextImage from "../ChakraNextImage";

export default function GalleryComponent(props) {
  const thumbs = props.thumbs;
  const images = props.images;

  return (
    <SRLWrapper>
      <SimpleGrid
        columns={{ base: "2", sm: "4", md: "5" }}
        spacing={10}
        mt={10}
      >
        {images.map((e, idx) => (
          <a href={e.src} key={`image-${e.src}-${idx}`}>
            <ChakraNextImage
              src={thumbs[idx]}
              alt={e}
              ratio="1"
              borderRadius="3xl"
            />
          </a>
        ))}
      </SimpleGrid>
    </SRLWrapper>
  );
}
