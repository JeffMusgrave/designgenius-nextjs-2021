import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function NavButton(props) {
  return (
    <Link href={props.link}>
      <Button
        w={{ base: "full", md: "auto" }}
        variant="ghost"
        navigation="true"
      >
        {props.children}
      </Button>
    </Link>
  );
}
