import { useState } from "react";
import { Button, DarkMode } from "@chakra-ui/react";
import Link from "next/link";

export default function NavButton(props) {
  const { link, mobileNav = false } = props;

  return (
    <>
      <DarkMode>
        <Link href={link}>
          <Button
            w={{ base: "full", md: "auto" }}
            variant="ghost"
            navigation="true"
            size="lg"
            fontSize={{ base: "4xl", md: "md" }}
            onClick={mobileNav && mobileNav.onClose}
          >
            {props.children}
          </Button>
        </Link>
      </DarkMode>
    </>
  );
}
