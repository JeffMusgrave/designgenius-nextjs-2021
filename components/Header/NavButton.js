import { Button, DarkMode } from "@chakra-ui/react";
import Link from "next/link";

export default function NavButton(props) {
  return (
    <DarkMode>
      <Link href={props.link}>
        <Button
          w={{ base: "full", md: "auto" }}
          variant="ghost"
          navigation="true"
          size="lg"
          fontSize={{ base: "4xl", md: "md" }}
        >
          {props.children}
        </Button>
      </Link>
    </DarkMode>
  );
}
