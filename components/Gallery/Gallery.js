import { SimpleGrid, chakra } from "@chakra-ui/react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro";
import ChakraNextImage from "../ChakraNextImage";

export default function GalleryComponent({
  images,
  thumbs,
  altVals,
  spacing = 10,
  ratio,
  columns = { base: "2", sm: "3", md: "3" },
  borderRadius = "xl",
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
        <SimpleGrid columns={columns} spacing={spacing} mt={10}>
          {images.map((e, idx) => (
            <chakra.a
              href={e.default.src}
              key={`img-${altVals[idx]}`}
              cursor="pointer"
              overflow="hidden"
              borderRadius={borderRadius}
              transition="transform 0.1s"
              transitionTimingFunction="ease-in-out"
              _hover={{ transform: "scale(1.1)" }}
            >
              <ChakraNextImage
                src={thumbs[idx]}
                alt={altVals[idx]}
                ratio={ratio}
              />
            </chakra.a>
          ))}
        </SimpleGrid>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}
