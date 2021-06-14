import { Box } from "@chakra-ui/layout";
import { bigHero, width } from "../../styles/designgenius/stylevars";
import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/fullsection";

const HeroComponent = (props) => {
  // const widthSize = bigHero === true ? "100%" : width;
  return (
    <FullSection>
      <ContentConstrainer>{props.children}</ContentConstrainer>
    </FullSection>
  );
};

export default HeroComponent;

{
  /* <Box w={widthSize} bg="gray.700" h="30rem">
{props.children}
</Box> */
}
