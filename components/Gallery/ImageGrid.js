import { SimpleGrid } from "@chakra-ui/react";
import ChakraImage from "./ChakraImage";

export default function ImageGrid(props) {
  const {
    columns = { base: "2", sm: "3", md: "3" },
    spacing = 10,
    images,
    altVals,
  } = props;

  return (
    <SimpleGrid columns={columns} spacing={spacing} mt={10} mb={20}>
      {images.map((e, idx) => (
        <ChakraImage
          e={e}
          idx={idx}
          {...props}
          key={`imggrid-${altVals[idx].title}-${idx}`}
        />
      ))}
    </SimpleGrid>
  );
}
