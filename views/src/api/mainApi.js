import jwtAxios from "../util/jwtUtil";
import { API_SERVER_HOST } from "./memberApi";
import axios from "axios";
//const host = `${API_SERVER_HOST}/api/main`;
const host = `/api/main`;

export const getTodayManagement = async (date) => {
  console.log("mainApi.js getTodayManagement() 진입 매개변수확인 ->", date);
  const res = await jwtAxios.get(`${host}/${date}`);
  return res.data;
};
