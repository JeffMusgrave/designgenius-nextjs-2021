import ContainerComponent from "./Container";

const Container = (props) => {
  return <ContainerComponent {...props}>{props.children}</ContainerComponent>;
};

export default Container;
