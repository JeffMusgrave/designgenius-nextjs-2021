import { Image } from "@chakra-ui/react";

export default function LightBulb(props) {
  const { colorMode } = props;
  return (
    <Image
      alignItems="center"
      mixBlendMode={colorMode === "dark" && "overlay"}
      opacity={colorMode === "dark" ? "1" : "0.25"}
      importance="high"
      sx={{ maskImage: "linear-gradient(to left, transparent 0%, black 100%)" }}
      src="/images/site/BlueLightBulb.svg"
    />
  );
}
