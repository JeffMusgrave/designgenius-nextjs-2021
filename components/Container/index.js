import ContainerComponent from "./Container";

export default function Container(props) {
  return <ContainerComponent {...props}>{props.children}</ContainerComponent>;
}
