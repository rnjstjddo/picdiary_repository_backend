import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getMoneyList,
  postMoney,
  patchMoney,
  deleteMoney,
} from "../api/moneyApi";

//getMoneyListAsync postMoneyAsync patchMoneyAsync deleteMoneyAsync
export const getMoneyListAsync = createAsyncThunk("getMoneyListAsync", () => {
  return getMoneyList();
});

export const postMoneyAsync = createAsyncThunk(
  "postMoneyAsync",
  ({
    moneyParam,
    finalExpenseObjectArray,
    finalIncomeObjectArray,
    dateobject,
  }) => {
    return postMoney({
      moneyParam,
      finalExpenseObjectArray,
      finalIncomeObjectArray,
      dateobject,
    });
  }
);

export const patchMoneyAsync = createAsyncThunk(
  "patchMoneyAsync",
  ({
    moneyParam,
    finalExpenseObjectArray,
    finalIncomeObjectArray,
    dateobject,
    bigchoose,
  }) => {
    return patchMoney({
      moneyParam,
      finalExpenseObjectArray,
      finalIncomeObjectArray,
      dateobject,
      bigchoose,
    });
  }
);

export const deleteMoneyAsync = createAsyncThunk(
  "deleteMoneyAsync",
  (param) => {
    return deleteMoney(param);
  }
);

const initState = [];

const moneySlice = createSlice({
  name: "moneySlice",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(getMoneyListAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(postMoneyAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(patchMoneyAsync.fulfilled, (state, action) => {
        // console.log(
        //   "moneySlice.js patchMoneyAsync.fulfilled 진입 결과 action객체 -> ",
        //   action
        // );
      })
      .addCase(patchMoneyAsync.rejected, (state, action) => {
        // console.log(
        //   "moneySlice.js patchMoneyAsync.rejected 진입 결과 action 객체 -> ",
        //   action
        // );
      })
      .addCase(deleteMoneyAsync.fulfilled, (state, action) => {
        return action.payload;
      });
  },
  //getMoneyListAsync postMoneyAsync patchMoneyAsync deleteMoneyAsync
});

export default moneySlice.reducer;
