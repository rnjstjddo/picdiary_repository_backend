import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, Navigate, useNavigate } from "react-router-dom";
import {
  joinPostAsync,
  loginPostAsync,
  logout,
  logoutGetAsync,
  forSessionAsync,
} from "../slices/loginSlice";
import { removeCookie } from "../util/cookieUtil";

const useCustomLogin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.loginSlice);

  //  console.log("loginState -> ", loginState);
  const isLogin = loginState.email !== "" ? true : false;

  const forSession = async () => {
    const result = await dispatch(forSessionAsync()); //리듀서함수에서 return값
    return result;
  };

  const doLogin = async (loginParam) => {
    console.log("useCustomLogin커스텀훅의 doLogin() 진입");
    const action = await dispatch(loginPostAsync(loginParam));
    console.log(
      "useCustomLogin커스텀훅의 doLogin() 진입후 axios 비동기 후 액션데이터 => ",
      action.payload
    );
    return action.payload;
  };

  const doJoin = async (joinParam) => {
    const action = await dispatch(joinPostAsync(joinParam));
    console.log(
      "useCustomLogin커스텀훅의 doJoin() 진입후 axios 비동기 후 액션데이터 => ",
      action.payload
    );
    return action.payload;
  };
  const doLogout = async () => {
    console.log("useCustomLogin커스텀훅의 doLogout() 진입");
    dispatch(logout());

    // const action = await dispatch(logoutGetAsync());
    // console.log(
    //   "useCustomLogin커스텀훅의 doLogout() 진입후 axios 비동기 후 액션데이터 => ",
    //   action.payload
    // );
    // return action.payload;
  };

  const moveToPath = (path) => {
    navigate({ pathname: path }, { replace: true });
  };

  const moveToLogin = () => {
    navigate({ pathname: "/member/login" }, { replace: true });
  };

  const moveToJoin = () => {
    navigate({ pathname: "/member/join" }, { replace: true });
  };

  const moveToLoginReturn = () => {
    return <Navigate replace to="/member/login" />;
  };

  //useEffect에서 로그인하지 않아서 에러시
  const effectException = (ex) => {
    console.log("useCustomLogin.js effectException 함수 진입 ", ex);
  };

  //추가
  const exceptionHandle = (ex) => {
    console.log("exceptionHandle() ", ex);

    if (!isLogin) {
      removeCookie("member");
      removeCookie("accessToken");

      return navigate({ pathname: "/login" }, { replace: true });
    }

    if (ex.response && ex.response.data) {
      const errorMsg = ex.response.data.error;

      const errorStr = createSearchParams({ error: errorMsg }).toString();

      // if (
      //   errorMsg === "REQUIRE_LOGIN" ||
      //   errorMsg === "ERROR_ACCESS_TOKEN" ||
      //   ex.response.data.code === 401
      // ) {
      //   alert("로그인이 필요합니다.");
      //   removeCookie("member");
      //   removeCookie("accessToken");
      //   navigate({ pathname: "/login", search: errorStr });
      //   return;
      // }

      // if (ex.response.data.error === "ERROR_ACCESSDENIED") {
      //   alert("권한이 없습니다.");
      //   removeCookie("member");
      //   removeCookie("accessToken");

      //   navigate({ pathname: "/login", search: errorStr });
      //   return;
      // }
    }

    //추가
    if (
      ex.name === "ERR_BAD_RESPONSE" ||
      ex.code === "AxiosError" ||
      ex.code === "ERR_BAD_RESPONSE" ||
      ex.message === "Network Error"
    ) {
      navigate({ pathname: "/" }, { replace: true });
      return;
    }

    if (isLogin && ex !== null) {
      navigate({ pathname: "/" }, { replace: true });
      return;
    }
  };

  return {
    loginState,
    isLogin,
    doLogin,
    doLogout,
    moveToPath,
    moveToLogin,
    moveToLoginReturn,
    moveToJoin,
    doJoin,
    exceptionHandle,
    //useEffect내에서 jwt에러
    effectException,
    //세션생성
    forSession,
  };
};

export default useCustomLogin;
