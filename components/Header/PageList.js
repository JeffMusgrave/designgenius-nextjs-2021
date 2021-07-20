// import { useState, useEffect } from "react";
import NavButton from "./NavButton";
import { useRouter } from "next/router";

export default function PageList(props) {
  const { asPath } = useRouter();

  const pathCheck = asPath === "/";
  const { mobileNav } = props;
  // const [prefix, setPrefix] = useState("/");

  // useEffect(() => {
  //   setPrefix(pathCheck ? "/" : "");
  // });

  const pathList = {
    "#design": "Design",
    "#albumart": "Album Art",
    "#contact": "Contact",
  };

  return (
    <>
      {Object.keys(pathList).map((e, idx) => (
        <NavButton
          link={`${pathCheck ? "/" : ""}${e}`}
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
