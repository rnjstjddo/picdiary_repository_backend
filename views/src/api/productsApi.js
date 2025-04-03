import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";
import jwtAxios from "../util/jwtUtil";

const host = `${API_SERVER_HOST}/api/products`;

export const postAdd = async (product) => {
  const header = { headers: { "content-type": "multipart/form-data" } };

  //const res = await axios.post(`${host}/`, product, header);
  //인터셉터적용
  const res = await jwtAxios.post(`${host}/`, product, header);

  return res.data;
};

//상품목록
export const getList = async (pageParam) => {
  const { page, size } = pageParam;

  // const res = await axios.get(`${host}/list`, {
  const res = await jwtAxios.get(`${host}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};

//상품조회
export const getOne = async (tno) => {
  //const res = await axios.get(`${host}/${tno}`);

  const res = await jwtAxios.get(`${host}/${tno}`);
  return res.data;
};

//수정
export const putOne = async (tno, product) => {
  const header = { headers: { "content-type": "multipart/form-data" } };
  //const res = await axios.put(`${host}/${tno}`, product, header);

  const res = await jwtAxios.put(`${host}/${tno}`, product, header);
  return res.data;
};

//삭제
export const deleteOne = async (pno) => {
  //const res = await axios.delete(`${host}/${pno}`);
  const res = await jwtAxios.delete(`${host}/${pno}`);

  return res.data;
};
