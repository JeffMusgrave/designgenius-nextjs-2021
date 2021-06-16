import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";

export default function HeroComponent(props) {
  return (
    <FullSection
      variant="fullNoGrow"
      minH={{ base: "10rem", sm: "20rem", md: "30rem", lg: "40rem" }}
      bg="gray.700"
      // backgroundImage="url(/images/bg.jpg)"
      backgroundSize="cover"
      pt="0"
    >
      <ContentConstrainer
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
        mt="7.5rem"
      >
        {props.children}
      </ContentConstrainer>
    </FullSection>
  );
}
