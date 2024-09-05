import SimpleReactLightbox, {
  SRLWrapper,
} from "@hueyyeng/simple-react-lightbox";

export default function GalleryWrapper(props) {
  const options = {
    settings: {
      overlayColor: "rgba(30, 30, 30, 1)",
    },
    buttons: {
      showDownloadButton: false,
      showAutoplayButton: false,
      showThumbnailsButton: false,
    },

    thumbnails: {
      showThumbnails: false,
    },
    caption: {
      showCaption: false,
    },
  };
  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>{props.children}</SRLWrapper>
    </SimpleReactLightbox>
  );
}
