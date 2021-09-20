import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PageList(props) {
  const { mobileNav } = props;
  const router = useRouter();

  const MobileDetect = (e) => {
    if (mobileNav) {
      mobileNav.onClose(e);
    }
  };

  const pathList = {
    "#youredge": "Your Edge",
    "#design": "Design",
    "#albumart": "Album Art",
    "#contact": "Contact",
  };

  return (
    <>
      {Object.keys(pathList).map((e, idx) => (
        <LinkSwitch
          e={e}
          pathname={router.pathname}
          key={`${pathList[e]}+${idx}`}
        >
          <Button
            as="a"
            href={router.pathname === "/" && `${e}`}
            w={{ base: "full", md: "auto" }}
            variant="ghost"
            navigation="true"
            size="lg"
            fontSize={{ base: "4xl", md: "lg" }}
            onClick={MobileDetect}
          >
            {pathList[e]}
          </Button>
        </LinkSwitch>
      ))}
    </>
  );
}

function NextLink({ e, children }) {
  return (
    <Link href={`/${e}`} shallow={true} passHref>
      {children}
    </Link>
  );
}

function LinkSwitch(props) {
  return props.pathname !== "/" ? (
    <NextLink {...props} />
  ) : (
    <>{props.children}</>
  );
}
