import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function NavButton(props) {
  const { mobileNav = false, children } = props;

  const MobileDetect = (e) => {
    if (mobileNav) {
      mobileNav.onClose(e);
    }
  };

  return (
    <PathSwitch {...props}>
      <Button
        w={{ base: "full", md: "auto" }}
        variant="ghost"
        navigation="true"
        size="lg"
        fontSize={{ base: "4xl", md: "md" }}
        onClick={MobileDetect}
      >
        {children}
      </Button>
    </PathSwitch>
  );
}

function PathSwitch(props) {
  const { link, pathCheck, children } = props;
  if (!pathCheck) {
    return <Link href={link}>{children}</Link>;
  } else {
    return <a href={link}>{children}</a>;
  }
}
