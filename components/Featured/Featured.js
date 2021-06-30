import { Text } from "@chakra-ui/react";
import Image from "next/image";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox-pro";

export default function FeaturedComponent(props) {
  return (
    <FullSection>
      <ContentConstrainer>
        <Text fontSize="4xl"> Make a great first impression.</Text>
        <Text fontSize="4xl"> Reach your customers and close the sale.</Text>
        {props.children}
      </ContentConstrainer>
    </FullSection>
  );
}
