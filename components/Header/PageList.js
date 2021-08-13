import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function PageList(props) {
  const { mobileNav } = props;

  const MobileDetect = (e) => {
    if (mobileNav) {
      mobileNav.onClose(e);
    }
  };

  const pathList = {
    "#youredge": "Your Edge",
    "#design": "Design",
    "#albumart": "Album Art",
    // "#video": "Video",
    "#contact": "Contact",
  };

  return (
    <>
      {Object.keys(pathList).map((e, idx) => (
        <Link
          href={`/${e}`}
          shallow={true}
          key={`${pathList[e]}+${idx}`}
          passHref
        >
          <Button
            as="a"
            w={{ base: "full", md: "auto" }}
            variant="ghost"
            navigation="true"
            size="lg"
            fontSize={{ base: "4xl", md: "lg" }}
            onClick={MobileDetect}
          >
            {pathList[e]}
          </Button>
        </Link>
      ))}
    </>
  );
}
