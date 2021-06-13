import { Button } from "@chakra-ui/react";
import Link from "next/link";

const NavButton = (props) => {
  return (
    <Link href={props.link}>
      <Button
        w={{ base: "full", md: "auto" }}
        variant="ghost"
        navigation={true}
      >
        {props.children}
      </Button>
    </Link>
  );
};

export default NavButton;
