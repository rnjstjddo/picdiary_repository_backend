import axios from "axios";
import jwtAxios from "../util/jwtUtil";
import { API_SERVER_HOST } from "./memberApi";
//const prefix = `${API_SERVER_HOST}/api/todo`;
const prefix = `/api/todo`;

export const getOne = async (tno) => {
  // const res = await axios.get(`${prefix}/${tno}`);
  const res = await axios.get(`${prefix}/${tno}`);

  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;

  //const res = await axios.get(`${prefix}/list`, {
  const res = await jwtAxios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};

//할일추가
export const postAdd = async (todoObj) => {
  //  const res = await axios.post(`${prefix}/`, todoObj);
  const res = await jwtAxios.post(`${prefix}/`, todoObj);

  return res.data;
};

//삭제
export const deleteOne = async (tno) => {
  //const res = await axios.delete(`${prefix}/${tno}`);
  const res = await jwtAxios.delete(`${prefix}/${tno}`);

  return res.data;
};

//수정
export const putOne = async (todo) => {
  // const res = await axios.put(`${prefix}/${todo.tno}`, todo);
  const res = await jwtAxios.put(`${prefix}/${todo.tno}`, todo);

  return res.data;
};
