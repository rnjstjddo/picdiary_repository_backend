import { useState, cloneElement } from "react";
import Footer from "./Footer";
import Header from "./Header";
import useCustomLogin from "../../hooks/useCustomLogin";

const LayoutIndex = ({ children }) => {
  const [date, setDate] = useState(new Date());

  const { loginState, isLogin } = useCustomLogin();

  //console.log("loginState -> ", loginState);
  //console.log("isLogin -> ", isLogin);

  // const clonedElement = cloneElement(children, { today: date });

  return (
    <>
      <Header isLogin={isLogin} />
      {children}
      <Footer />
    </>
  );
};

export default LayoutIndex;
