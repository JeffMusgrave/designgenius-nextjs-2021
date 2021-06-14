import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/fullsection";

const FooterComponent = (props) => {
  return (
    <FullSection variant="fullNoGrow">
      <ContentConstrainer>
        Created by Design Genius. &copy; 2021
      </ContentConstrainer>
    </FullSection>
  );
};

export default FooterComponent;
