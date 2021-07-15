import NavButton from "./NavButton";
import { useRouter } from "next/router";

export default function PageList(props) {
  const router = useRouter();
  const pathCheck = router.pathname === "/";
  const { mobileNav } = props;

  const pathList = {
    "#design": "Design",
    "#albumart": "Album Art",
    "#contact": "Contact",
  };

  return (
    <>
      {Object.keys(pathList).map((e, idx) => (
        <NavButton
          link={`${pathCheck && "/"}${e}`}
          mobileNav={mobileNav}
          pathCheck={pathCheck}
        >
          {pathList[e]}
        </NavButton>
      ))}
    </>
  );
}
