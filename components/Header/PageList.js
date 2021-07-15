import NavButton from "./NavButton";
import { useRouter } from "next/router";

export default function PageList(props) {
  // const router = useRouter();

  const { asPath } = useRouter();

  const pathCheck = asPath === "/";
  const { mobileNav } = props;

  console.log(pathCheck);

  const pathList = {
    "#design": "Design",
    "#albumart": "Album Art",
    "#contact": "Contact",
  };

  return (
    <>
      {Object.keys(pathList).map((e, idx) => (
        <NavButton
          link={`${!pathCheck && "/"}${e}`}
          mobileNav={mobileNav}
          pathCheck={pathCheck}
          key={`${e}`}
        >
          {pathList[e]}
        </NavButton>
      ))}
    </>
  );
}
