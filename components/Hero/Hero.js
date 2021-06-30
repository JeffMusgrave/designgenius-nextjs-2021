import {
  FullSection,
  ContentConstrainer,
} from "../../styles/designgenius/components/Fullsection";

export default function HeroComponent({
  bgImage,
  bgSize = "cover",
  bgGradient,
  bgColor,
  children,
}) {
  return (
    <FullSection
      variant="hero"
      h={{ base: "10rem", sm: "20rem", md: "30rem", lg: "45rem" }}
      light="gray.200"
      dark="gray.900"
      bgImage={`url(${bgImage})`}
      bgGradient={bgGradient}
      bgSize={bgSize}
      bgColor={bgColor}
      pt="0"
    >
      <ContentConstrainer mt="7.5rem" position="relative">
        {children}
      </ContentConstrainer>
    </FullSection>
  );
}
