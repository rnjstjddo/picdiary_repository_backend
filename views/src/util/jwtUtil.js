import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";
import { API_SERVER_HOST } from "../api/memberApi";

const jwtAxios = axios.create();

//jwt 재발급
const refreshJWT = async (refreshToken, accessToken) => {
  const host = API_SERVER_HOST;

  console.log("jwtUtil.js refreshJWT진입 ");

  const header = { headers: { Authorization: `Bearer ${accessToken}` } };

  try {
    const res = await axios.get(
      `${host}/api/member/refreshToken?refreshToken=${refreshToken}`,
      header
    );
    console.log("jwtUtil.js refreshJWT진입 axios 결과 -> ", res);
    return res.data;
  } catch (err) {
    console.log("jwtUtil.js refreshJWT진입 catch() -> ", err);
    //    if (err.response.data.name === "TokenExpiredError") {
    if (err.response.data.error === "ERROR_REFRESH_TOKEN") {
      return Promise.reject({ response: { data: { error: "REQUIRE_LOGIN" } } });
    }
  }
};

const beforeReq = (config) => {
  //요청전에 jwt추가
  //const memberInfo = getCookie("member");
  // if (!memberInfo) {
  //   return Promise.reject({ response: { data: { error: "REQUIRE_LOGIN" } } });
  // }
  // const { accessToken } = memberInfo;

  console.log("jwtUtil.js beforeReq() 매개변수config.url=> ", config.url);
  //const result =
  //config.url === "http://localhost:8001/api/diary" ? true : false;

  // console.log("jwtUtil.js beforeReq() 결과", result);
  //if (result) {
  const accessToken = getCookie("accessToken");
  console.log(
    "jwtUtil.js beforeReq() 내 쿠키에 저장된 accessToken 꺼냄 => ",
    accessToken
  );
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
  //  } else {
  //   console.log(
  //     "jwtUtil.js beforeReq() 매개변수 엑세스토큰 헤더에 넣지않음 config.url=> ",
  //     config.url
  //   );

  //   return config;
  // }
};

const requestFail = (err) => {
  console.log("jwtUtil.js requestFail() 진입 err->  ", err);

  return Promise.reject(err);
};

const beforeRes = async (res) => {
  console.log("jwtUtil.js beforeRes() 진입 res ->  ", res);

  //  const data = res.data;
  //const accessToken = res.headers.Authorization.accessToken;
  //const accessToken = res.data.accessToken;

  //console.log("cookieUtil.js beforeRes() 받은 accessToken ->", accessToken);
  //setCookie("accessToken", accessToken);
  //if (data && data.error === "ERROR_ACCESS_TOKEN") {
  // if (
  //   res.response.data.error === "ERROR_ACCESS_TOKEN" ||
  //   res.response.data.error === "EXPIRED_ACCESS_TOKEN"
  // ) {
  //   console.log("cookieUtil.js beforeRes 함수에서 error발생시 토큰재발행 ");

  //   const memberCookieValue = getCookie("member");
  //   // console.log(
  //   //   "jwtUtil.js beforeRes함수에서 member쿠키 저장내용확인 -> ",
  //   //   memberCookieValue
  //   // );
  //   const result = await refreshJWT(memberCookieValue.refreshToken); //새로발급

  //   setCookie("member", JSON.stringify(memberCookieValue), 1);

  //   //원래호출
  //   const originalRequest = res.config;
  //   originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;
  //   return await axios(originalRequest);
  // }
  return res;
};

const responseFail = async (err) => {
  console.log("jwtUtil.js responseFail() 진입 err->  ", err);

  if (
    err.status === 419 ||
    err.code === "ERR_BAD_REQUEST" ||
    err.response.data.error === "ERROR_ACCESS_TOKEN" ||
    err.response.data.error === "EXPIRED_ACCESS_TOKEN"
  ) {
    console.log("jwtUtil.js responseFail() 진입 엑세스토큰 재발급진입");

    const memberCookieValue = getCookie("member");
    console.log(
      "jwtUtil.js responseFail() 진입 member쿠키가져오기-> ",
      memberCookieValue
    );

    if (memberCookieValue && memberCookieValue.user.refreshtoken) {
      const refreshtoken = memberCookieValue.user.refreshtoken;
      //member쿠키있다면
      console.log(
        "jwtUtil.js responseFail() 진입 member쿠키에서 refreshtoken 가져오기-> ",
        refreshtoken
      );
      const accessToken = getCookie("accessToken");

      const result = await refreshJWT(refreshtoken, accessToken); //새로발급

      console.log("jwtUtil.js responseFail() 진입 refreshJWT() ->  ", result);

      setCookie("member", JSON.stringify(result), 1);

      //원래호출
      const originalRequest = err.config;
      originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;
      return await axios(originalRequest);
    } else {
      //member쿠키없다면
      console.log("jwtUtil.js responseFail() 진입 err ->  ", err);

      return Promise.reject(err);
    }
  }

  if (err.response.data.error === "ERROR_REFRESH_TOKEN") {
    return Promise.reject(err);
  }
  if (err.message === "Network Error" || err.name === "AxiosError") {
    return Promise.reject(err);
  }
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
