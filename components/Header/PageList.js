import NavButton from "./NavButton";

export default function PageList(props) {
  const { mobileNav } = props;
  return (
    <>
      <NavButton link="#design" mobileNav={mobileNav}>
        Design
      </NavButton>
      <NavButton link="#albumart" mobileNav={mobileNav}>
        Album Art
      </NavButton>
      <NavButton link="#contact" mobileNav={mobileNav}>
        Contact
      </NavButton>
    </>
  );
}
