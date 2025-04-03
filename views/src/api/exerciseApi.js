import jwtAxios from "../util/jwtUtil";
import { API_SERVER_HOST } from "./memberApi";
import axios from "axios";
const host = `${API_SERVER_HOST}/api/exercise`;

//운동 조회전체
export const getExerciseList = async ({ currentDate }) => {
  const res = await jwtAxios.get(`${host}/${currentDate}`);
  return res.data;
};

//일자조회
export const getExerciseAll = async (dateobject) => {
  const res = await jwtAxios.get(`${host}/read/${dateobject}`);
  return res.data;
};

//일자 시간조회
export const getExerciseEach = async ({ dateobject, whenchoose }) => {
  const res = await jwtAxios.get(`${host}/read/${dateobject}/${whenchoose}`);
  return res.data;
};

//운동 수정
export const patchExercise = async ({
  dateobject,
  whenchoose,
  exerciseParam,
}) => {
  const res = await jwtAxios.patch(
    `${host}/modify/${dateobject}/${whenchoose}`,
    exerciseParam
  );
  return res.data;
};

//운동 등록
export const postExercise = async ({ dateobject, exerciseParam }) => {
  const res = await jwtAxios.post(
    `${host}/create/${dateobject}`,
    exerciseParam
  );
  return res.data;
};

//운동 삭제
export const deleteExercise = async ({ whenchoose, dateobject }) => {
  const res = await jwtAxios.delete(
    `${host}/remove/${dateobject}/${whenchoose}`
  );
  return res.data;
};

//getChooseExercise
export const getChooseExercise = async (dateobject) => {
  const res = await jwtAxios.get(`${host}/chooseexercise/${dateobject}`);
  return res.data;
};
