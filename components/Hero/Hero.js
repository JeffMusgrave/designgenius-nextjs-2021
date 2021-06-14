import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";

const HeroComponent = (props) => {
  return (
    <FullSection variant="fullNoGrow" h="20rem">
      <ContentConstrainer>{props.children}</ContentConstrainer>
    </FullSection>
  );
};

export default HeroComponent;
