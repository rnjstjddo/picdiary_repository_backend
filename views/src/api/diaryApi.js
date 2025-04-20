import useCustomLogin from "../hooks/useCustomLogin";
import jwtAxios from "../util/jwtUtil";
import { API_SERVER_HOST } from "./memberApi";
import axios from "axios";
//const host = `${API_SERVER_HOST}/api/diary`;
const host = `/api/diary`;

//다이어리 조회전체
export const getDiaryList = async ({ currentDate }) => {
  //console.log("diaryApi.js getDiaryList() 진입 currentDate -> ", currentDate);
  //const res = await axios.get(`${host}`);
  const res = await jwtAxios.get(`${host}/${currentDate}`);

  return res.data; //thunk함수의 return으로 전달
};

//다이어리 수정
export const patchDiary = async ({ diaryParam, picture }) => {
  //console.log("diaryApi.js patchDiary 매개변수 확인 picture-> ", picture);

  //console.log(
  //  "diaryApi.js patchDiary 매개변수 확인 picture.files[0]-> ",
  //  picture.files[0]
  //);
  ////console.log("diaryApi.js postDiary 매개변수 확인 diaryParam-> ", diaryParam);

  const formData = new FormData();
  formData.append("content", diaryParam.content);
  if (picture) {
    formData.append("picture", picture.files[0]);
  }

  //  const res = await axios.patch(
  const res = await jwtAxios.patch(
    `${host}/modify/${diaryParam.id}`,
    formData,
    {
      headers: { "content-type": "multipart/form-data" },
    }
  );
  return res.data;
};

//다이어리 등록
export const postDiary = async ({ diaryParam, picture }) => {
  //이미지존재

  //console.log("diaryApi.js postDiary 매개변수 확인 files-> ", picture.files[0]);
  //console.log("diaryApi.js postDiary 매개변수 확인 diaryParam-> ", diaryParam);

  const formData = new FormData();
  formData.append("content", diaryParam.content);
  formData.append("dateobject", diaryParam.dateobject);
  if (picture) {
    formData.append("picture", picture.files[0]);
  }
  formData.append("email", diaryParam.email);

  //console.log(
  //  "diaryApi.js postDiary함수에서 FormData 만든것 확인 -> ",
  //  formData
  //);

  // const res = await axios.post(`${host}/create`, formData, {
  const res = await jwtAxios.post(`${host}/create`, formData, {
    headers: { "content-type": "multipart/form-data" },
  });

  return res.data;
};

//다이어리 삭제
export const deleteDiary = async (id) => {
  //const res = await axios.delete(`${host}/remove/${dateobject}`);
  const res = await jwtAxios.delete(`${host}/remove/${id}`);

  return res.data;
};

//다이어리 조회1개
export const getDiary = async (id) => {
  //console.log("diaryApi.js getDiary() 진입");
  const res = await jwtAxios.get(`${host}/read/${id}`);
  return res;
};
