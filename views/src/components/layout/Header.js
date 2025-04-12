import BasicMenu from "../menus/BasicMenu";

const Header = (props) => {
  return <BasicMenu isLogin={props.isLogin} />;
};

export default Header;
