import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro";
import ImageGrid from "./ImageGrid";
import ImageWithDescription from "./ImageDesc";
import { VStack } from "@chakra-ui/react";

export default function GalleryComponent(props) {
  // const options = {
  //   settings: {
  //     overlayColor: "rgba(30, 30, 30, 1)",
  //   },
  //   buttons: {
  //     showDownloadButton: false,
  //     showAutoplayButton: false,
  //     showThumbnailsButton: false,
  //   },

  //   thumbnails: {
  //     showThumbnails: false,
  //   },
  //   caption: {
  //     showCaption: false,
  //   },
  // };

  const normLayout = props.layout !== "single";
  return (
    <VStack
      spacing={normLayout && "10rem"}
      align="stretch"
      mt={{ base: "0rem", md: normLayout && "3rem" }}
    >
      <GallerySwitch {...props} />
    </VStack>
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
