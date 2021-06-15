import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";

export default function FooterComponent(props) {
  return (
    <FullSection variant="fullNoGrow">
      <ContentConstrainer>
        Created by Design Genius. &copy; 2021
      </ContentConstrainer>
    </FullSection>
  );
}
