import SimpleReactLightbox, {
  SRLWrapper,
} from "@hueyyeng/simple-react-lightbox";
import ImageGrid from "./ImageGrid";
import ImageWithDescription from "./ImageDesc";
import { VStack } from "@chakra-ui/react";

export default function GalleryComponent(props) {
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
