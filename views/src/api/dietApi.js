import jwtAxios from "../util/jwtUtil";
import { API_SERVER_HOST } from "./memberApi";
import axios from "axios";
//const host = `${API_SERVER_HOST}/api/diet`;
const host = `/api/diet`;

//식단목록전체
export const getDietList = async ({ currentDate }) => {
  console.log("dietApi.js getDietList 매개변수확인 ->", currentDate);
  //const res = await axios.get(`${host}`);
  const res = await jwtAxios.get(`${host}/${currentDate}`);

  return res.data;
};

//전체조회
export const getDietAll = async (objectdate) => {
  const res = await jwtAxios.get(`${host}/readall/${objectdate}`);

  return res.data;
};

//개별조회
export const getDietEach = async ({ choose, dateobject }) => {
  const res = await jwtAxios.get(`${host}/read/${choose}/${dateobject}`);

  return res.data;
};

//식단 수정
export const patchDiet = async ({ finalObjectArray, dateobject, choose }) => {
  console.log("patchDiet 매개변수확인 finalObjectArray-> ", finalObjectArray);
  const res = await jwtAxios.patch(`${host}/modify/${choose}/${dateobject}`, {
    finalObjectArray,
  });

  return res.data;
};

//식단 등록
export const postDiet = async ({ dietParam, finalObjectArray }) => {
  //const res = await axios.post(`${host}/create`);
  console.log("dietApi.js postDiet() 매개변수 dietParam -> ", dietParam);
  console.log(
    "dietApi.js postDiet() 매개변수 finalObjectArray-> ",
    finalObjectArray
  );

  //content, quantity, dateobject,
  const res = await jwtAxios.post(`${host}/create`, {
    dietParam,
    finalObjectArray,
  });

  return res.data;
};

//식단 삭제
export const deleteDiet = async ({ choose, dateobject }) => {
  const res = await jwtAxios.delete(`${host}/remove/${choose}/${dateobject}`);

  return res.data;
};

//getChooseDiet
export const getChooseDiet = async (dateobject) => {
  const res = await jwtAxios.get(`${host}/choosediet/${dateobject}`);
  return res.data;
};
