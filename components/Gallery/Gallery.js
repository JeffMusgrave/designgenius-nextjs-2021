import { SimpleGrid, chakra } from "@chakra-ui/react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro";
import ChakraNextImage from "../ChakraNextImage";

export default function GalleryComponent({
  images,
  thumbs,
  altVals,
  borderRadius = "xl",
  spacing = 10,
  ratio,
  ...props
}) {
  const options = {
    buttons: {
      showDownloadButton: false,
      showAutoplayButton: false,
      showThumbnailsButton: false,
    },
  };
  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <SimpleGrid
          columns={{ base: "2", sm: "3", md: "3" }}
          spacing={spacing}
          mt={10}
        >
          {images.map((e, idx) => (
            <chakra.a
              href={e.default.src}
              key={`img-${altVals[idx]}`}
              cursor="pointer"
              overflow="hidden"
              borderRadius={borderRadius}
              border="1rem"
              borderColor="gray.900"
            >
              <ChakraNextImage
                src={thumbs[idx]}
                alt={altVals[idx]}
                ratio={16 / 9}
              />
            </chakra.a>
          ))}
        </SimpleGrid>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}
