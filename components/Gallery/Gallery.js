import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro";
import ImageGrid from "./ImageGrid";
import ImageWithDescription from "./ImageDesc";
import { VStack } from "@chakra-ui/react";

export default function GalleryComponent(props) {
  const options = {
    buttons: {
      showDownloadButton: false,
      showAutoplayButton: false,
      showThumbnailsButton: false,
    },

    thumbnails: {
      showThumbnails: false,
    },
  };

  const normLayout = props.layout !== "single";
  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <VStack
          spacing={normLayout && "10rem"}
          align="stretch"
          mt={{ base: "0rem", md: normLayout && "3rem" }}
        >
          <GallerySwitch {...props} />
        </VStack>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}

function GallerySwitch({ galleryType, ...rest }) {
  switch (galleryType) {
    case "description":
      return <ImageWithDescription {...rest} />;
      break;
    default:
      return <ImageGrid {...rest} />;
  }
}
