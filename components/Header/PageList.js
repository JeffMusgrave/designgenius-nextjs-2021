import NavButton from "./NavButton";
import { useRouter } from "next/router";

export default function PageList(props) {
  const router = useRouter();
  const pathCheck = router.pathname === "/";
  const { mobileNav } = props;
  return (
    <>
      <NavButton
        link={pathCheck ? "#design" : "/#design"}
        mobileNav={mobileNav}
      >
        Design
      </NavButton>
      <NavButton
        link={pathCheck ? "#albumart" : "/#albumart"}
        mobileNav={mobileNav}
      >
        Album Art
      </NavButton>
      <NavButton
        link={pathCheck ? "#contact" : "/#contact"}
        mobileNav={mobileNav}
      >
        Contact
      </NavButton>
    </>
  );
}
