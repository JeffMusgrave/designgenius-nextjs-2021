import { darken, lighten } from "@chakra-ui/theme-tools";

export default function colourAltSwitch(colourVar, mode, num, idx) {
  const odd = idx % 2 !== 0;

  if (!colourVar) {
    return null;
  }

  if (Array.isArray(colourVar)) {
    return !odd ? colourVar[0] : colourVar[1];
  }

  if (odd) {
    return mode === "lighten"
      ? lighten(colourVar, num)
      : darken(colourVar, num);
  }

  return colourVar;
}
