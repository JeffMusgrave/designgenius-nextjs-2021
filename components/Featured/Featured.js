import { Text } from "@chakra-ui/react";
import Image from "next/image";
import {
  Fullsection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro";

export default function FeaturedComponent(props) {
  return (
    <Fullsection>
      <ContentConstrainer>
        <Text fontSize="4xl"> Make a great first impression.</Text>
        <Text fontSize="4xl"> Reach your customers and close the sale.</Text>
        {props.children}
      </ContentConstrainer>
    </Fullsection>
  );
}
