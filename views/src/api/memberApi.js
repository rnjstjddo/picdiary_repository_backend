import jwtAxios from "../util/jwtUtil";
import axios from "axios";
import { setCookie } from "../util/cookieUtil";

//export const API_SERVER_HOST = "http://localhost:8001";
export const API_SERVER_HOST = "picdiary2025.store";
//const host = `${API_SERVER_HOST}/api/member`; //https://picdiary2025.store/picdiary2025.store/api/member/join 이렇게 요청주소 날라가네
//아래로 바꿈
const host = `/api/member`;

console.log("memberApi.js 에서 API_SERVER_HOST->", API_SERVER_HOST);

export const forSession = async () => {
  console.log("memberApi.js 에서 forSession 진입");

  const res = await axios.post(`${host}/forSession`);
  return res.data; //이값은 리듀서함수로 이동
};

export const loginPost = async (loginParam) => {
  //const header = { headers: { "content-type": "x-www-form-urlencoded" } };
  console.log("memberApi.js 에서 loginPost 매개변수 확인 => ", loginParam);
  const form = new FormData();
  form.append("email", loginParam.email);
  form.append("password", loginParam.pw);
  const res = await axios.post(
    `${host}/login`,
    //{ email: loginParam.email, password: loginParam.pw }
    //form,
    {
      headers: { "Content-Type": "multipart/form-data" },
      email: loginParam.email,
      password: loginParam.pw,
    }
    //header
  );

  //console.log("memberApi.js loginPost() axios결과 -> ", res.headers);
  const accessToken = res.data.accessToken;

  console.log("memberApi.js loginPost() 결과  accessToken -> ", accessToken);
  setCookie("accessToken", JSON.stringify(accessToken), 1);

  return res.data;
};

export const joinPost = async (joinParam) => {
  //new FormData생성시
  // const header = { headers: { "content-type": "multipart/form-data" } };
  // const form = new FormData();
  // form.append("email", joinParam.email);
  // form.append("password", joinParam.pw);
  // form.append("nick", joinParam.nick);

  // const res = await axios.post(`${host}/join`, form, header);

  // const header = { headers: { "content-type": "x-www-form-urlencoded" } };
  //  headers: { 'content-type': 'application/x-www-form-urlencoded' }
  const res = await axios.post(
    `${host}/join`,
    {
      email: joinParam.email,
      password: joinParam.pw,
      nick: joinParam.nick,
    },
    { headers: { "content-type": "application/x-www-form-urlencoded" } }
  );
  console.log("memberApi.js joinPost() 진입 axios후 결과 -> ", res);

  return res.data;
};

export const logoutGet = async () => {
  // const header = { headers: { "content-type": "x-www-form-urlencoded" } };
  // const form = new FormData();
  // form.append("email", joinParam.email);
  // form.append("password", joinParam.pw);
  // form.append("nickname", joinParam.nick);
  console.log("memberApi.js logoutGet() 진입 ");

  //  const res = await jwtAxios.get(`${host}/logout`, { withCredentials: true });
  const res = await jwtAxios.get(`${host}/logout`);

  console.log("memberApi.js logoutGet() 진입 axios 결과 -> ", res);
  console.log(
    "memberApi.js logoutGet() 진입 axios 결과  res.data-> ",
    res.date
  );

  return res.data;
};

//수정
export const modifyMember = async (member) => {
  const res = await jwtAxios.put(`${host}/modify`, member);
  return res.data;
};
