import { SimpleGrid, AspectRatio, Box } from "@chakra-ui/react";
import { SRLWrapper } from "simple-react-lightbox-pro";
import ChakraNextImage from "../ChakraNextImage";
import Image from "next/image";

export default function GalleryComponent(props) {
  const dir = props.dir;
  const images = props.images;

  console.log(dir);
  return (
    <SRLWrapper>
      <SimpleGrid columns={{ base: "2", sm: "3", md: "4" }} spacing={0} mt={10}>
        {images.map((e) => (
          <a href={`${dir}/${e}.jpg`} key={e}>
            <Image
              objectFit="cover"
              src={`${dir}/thumbs/${e}_200.jpg`}
              width={500}
              height={500}
              srl_gallery_image="true"
            />
          </a>
        ))}
      </SimpleGrid>
    </SRLWrapper>
  );
}
