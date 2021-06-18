import { SimpleGrid, AspectRatio, Box } from "@chakra-ui/react";
import { SRLWrapper } from "simple-react-lightbox-pro";
import ChakraNextImage from "../ChakraNextImage";

export default function GalleryComponent(props) {
  const thumbs = props.thumbs;
  const images = props.images;
  console.log(thumbs);
  return (
    <SRLWrapper>
      <SimpleGrid columns={{ base: "2", sm: "3", md: "4" }} spacing={0} mt={10}>
        {images.map((e, idx) => (
          <a href={e.src} key={`image-${e.src}-${idx}`}>
            <ChakraNextImage src={thumbs[idx]} alt={e} ratio="1" />
          </a>
        ))}
      </SimpleGrid>
    </SRLWrapper>
  );
}

{
  /* <SRLWrapper>
<SimpleGrid columns={{ base: "2", sm: "3", md: "4" }} spacing={0} mt={10}>
  {images.map((e) => (
    <a href={`${dir}/${e}.jpg`} key={e}>
      <ChakraNextImage
        src={`${dir}/thumbs/${e}_200.jpg`}
        alt={e}
        ratio="1"
      />
    </a>
  ))}
</SimpleGrid>
</SRLWrapper> */
}
