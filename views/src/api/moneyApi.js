import jwtAxios from "../util/jwtUtil";
import { API_SERVER_HOST } from "./memberApi";
import axios from "axios";

//const host = `${API_SERVER_HOST}/api/money`;
const host = `/api/money`;

//가계부조회전체
export const getMoneyList = async ({ currentDate }) => {
  const res = await jwtAxios.get(`${host}/${currentDate}`);
  return res.data;
};

//가계부조회일자별
export const getMoney = async (dateobject) => {
  const res = await jwtAxios.get(`${host}/read/${dateobject}`);
  return res.data;
};

//가계부수정
export const patchMoney = async ({
  moneyParam,
  finalExpenseObjectArray,
  finalIncomeObjectArray,
  dateobject,
  bigchoose,
}) => {
  //console.log("moneyApi.js moneyParam -> ", moneyParam);
  const res = await jwtAxios.patch(`${host}/modify/${dateobject}`, {
    moneyParam,
    finalIncomeObjectArray,
    finalExpenseObjectArray,
    bigchoose,
  });
  return res.data;
};

//가계부등록
export const postMoney = async ({
  moneyParam,
  finalExpenseObjectArray,
  finalIncomeObjectArray,
  dateobject,
}) => {
  const res = await jwtAxios.post(`${host}/create/${dateobject}`, {
    moneyParam,
    finalExpenseObjectArray,
    finalIncomeObjectArray,
  });
  return res.data;
};

//가계부삭제
export const deleteMoney = async ({ dateobject, bigchoose }) => {
  const res = await jwtAxios.delete(
    `${host}/remove/${dateobject}/${bigchoose}`
  );
  return res.data;
};

//getChooseMoney
export const getChooseMoney = async ({ dateobject, bigchoose }) => {
  const res = await jwtAxios.get(
    `${host}/choosemoney/${dateobject}/${bigchoose}`
  );
  return res.data;
};

export const choosecheck = async ({ dateobject }) => {
  const res = await jwtAxios.get(`${host}/choosecheck/${dateobject}`);
  return res.data;
};
