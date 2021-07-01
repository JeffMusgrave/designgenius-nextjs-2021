import { useColorMode, IconButton, DarkMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function ColourModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const iconColor = {
  //   light: "black",
  //   dark: "white",
  // };
  return (
    <DarkMode>
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        borderRadius="lg"
        size="lg"
      />
    </DarkMode>
  );
}
