import NavButton from "./NavButton";
import { useRouter } from "next/router";

export default function PageList(props) {
  const router = useRouter();
  const pathCheck = router.pathname === "/";
  const { mobileNav } = props;
  return (
    <>
      <NavButton
        link={`${pathCheck && "/"}#design`}
        mobileNav={mobileNav}
        pathCheck={pathCheck}
      >
        Design
      </NavButton>
      <NavButton
        link={`${pathCheck && "/"}#albumart`}
        mobileNav={mobileNav}
        pathCheck={pathCheck}
      >
        Album Art
      </NavButton>
      <NavButton
        link={`${pathCheck && "/"}#contact`}
        mobileNav={mobileNav}
        pathCheck={pathCheck}
      >
        Contact
      </NavButton>
    </>
  );
}
