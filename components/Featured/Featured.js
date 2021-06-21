import {
  Heading,
  Flex,
  Grid,
  Box,
  AspectRatio,
  chakra,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro";

export default function FeaturedComponent(props) {
  const {
    heading,
    direction,
    src,
    borderRadius,
    thumb,
    alt,
    ratio = "1",
  } = props;
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
        <FullSection>
          <ContentConstrainer>
            {/* <Flex
              direction={{
                base: "column",
                md: direction ? "row" : "row-reverse",
              }}
            > */}
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(10, 1fr)" }}
              templateRows={{ base: "repeat(3, 1fr)", md: "repeat(10, 1fr)" }}
              gap={6}
            >
              <GridItem
                colStart={4}
                colSpan={8}
                rowStart={1}
                rowEnd={11}
                overflow="hidden"
                borderRadius={borderRadius}
              >
                <chakra.a
                  href={src}
                  key={`img-${src}`}
                  cursor="pointer"

                  // flex={{ md: "3" }}
                >
                  <AspectRatio ratio={ratio}>
                    <Image
                      src={thumb}
                      alt={alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </AspectRatio>
                </chakra.a>
              </GridItem>
              <GridItem
                // ml={{ md: direction && 4 }}
                // mr={{ md: !direction && 4 }}
                // mt={{ base: 4, md: 0 }}
                // flex={{ md: 1 }}
                colStart={1}
                colSpan={4}
                rowStart={2}
                rowEnd={10}
                zIndex="3"
                bg="gray.700"
                opacity="0.9"
                py={4}
                px={6}
                borderRadius="xl"
              >
                <Heading mb={4}>{heading}</Heading>
                {props.children}
              </GridItem>
              {/* </Flex> */}
            </Grid>
          </ContentConstrainer>
        </FullSection>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}
