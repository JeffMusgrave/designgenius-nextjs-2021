import NavButton from "./NavButton";

export default function PageList(props) {
  const { mobileNav } = props;
  return (
    <>
      <NavButton link="#portfolio" mobileNav={mobileNav}>
        Portfolio
      </NavButton>
      <NavButton link="#about" mobileNav={mobileNav}>
        About
      </NavButton>
      <NavButton link="#contact" mobileNav={mobileNav}>
        Contact
      </NavButton>
    </>
  );
}
