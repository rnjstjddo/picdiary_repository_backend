import axios from "axios";
import jwtAxios from "../util/jwtUtil";
import { API_SERVER_HOST } from "./memberApi";
//const prefix = `${API_SERVER_HOST}/api/chat`;
const prefix = `/api/chat`;

export const chatGetPost = async ({ chatroomname, chatroompassword }) => {
  //console.log(
  //  "api/chat.js chatGetPost 매개변수확인 chatroomname -> ",
  //  chatroomname
  //);
  //console.log(
  //  "api/chat.js chatGetPost 매개변수확인 chatroompassword -> ",
  //  chatroompassword
  //);
  const res = await jwtAxios.post(`${prefix}/${chatroomname}`, {
    chatroompassword,
  });

  return res.data;
};

export const chatList = async () => {
  const res = await jwtAxios.get(`${prefix}/list`);
  return res.data;
};

//
export const chatAdd = async ({
  chatroomname,
  chatroompassword,
  loginState,
}) => {
  //console.log(
  //  "api/chat.js chatAdd 매개변수확인 chatroomname -> ",
  //  chatroomname
  //);
  //console.log(
  //  "api/chat.js chatAdd 매개변수확인 chatroompassword -> ",
  //  chatroompassword
  //);
  //console.log(
  //  "api/chat.js chatAdd 매개변수확인 chatroomname -> ",
  //  chatroomname
  //);
  const res = await jwtAxios.post(`${prefix}/create`, {
    chatroomname,
    chatroompassword,
    loginState,
  });

  return res.data;
};

//삭제
export const chatDelete = async ({ chatroomname, chatroompassword }) => {
  const res = await jwtAxios.delete(`${prefix}/${chatroomname}`, {
    chatroompassword,
  });

  return res.data;
};
