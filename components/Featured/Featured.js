import { Text } from "@chakra-ui/react";
import Image from "next/image";
import {
  FullSectionComponent,
  ContentConstrainer,
} from "../../styles/designgenius/components/FullSectionComponent";
import SimpleReactLightbox, {
  SRLWrapper,
} from "@hueyyeng/simple-react-lightbox";

export default function FeaturedComponent(props) {
  return (
    <FullSectionComponent>
      <ContentConstrainer>
        <Text fontSize="4xl"> Make a great first impression.</Text>
        <Text fontSize="4xl"> Reach your customers and close the sale.</Text>
        {props.children}
      </ContentConstrainer>
    </FullSectionComponent>
  );
}
