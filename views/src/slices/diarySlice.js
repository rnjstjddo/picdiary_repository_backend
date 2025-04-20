import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDiaryList,
  postDiary,
  patchDiary,
  deleteDiary,
} from "../api/diaryApi";

export const getDiaryListAsync = createAsyncThunk("getDiaryListAsync", () => {
  return getDiaryList();
});

export const postDiaryAsync = createAsyncThunk(
  "postDiaryAsync",
  ({ diaryParam, picture }) => {
    return postDiary({ diaryParam, picture });
  }
);

export const patchDiaryAsync = createAsyncThunk(
  "patchDiaryAsync",
  ({ diaryParam, picture }) => {
    return patchDiary({ diaryParam, picture });
  }
);

export const deleteDiaryAsync = createAsyncThunk("deleteDiaryAsync", (id) => {
  return deleteDiary(id);
});

const initState = [];

const diarySlice = createSlice({
  name: "diarySlice",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(getDiaryListAsync.fulfilled, (state, action) => {
        // console.log(
        //   "diarySlice.js getDiaryListAsyncfulfilled() 진입 action.payload -> ",
        //   action.payload
        // );

        return action.payload;
      })
      .addCase(getDiaryListAsync.pending, (state, action) => {
        // console.log(
        //   "diarySlice.js getDiaryListAsync.pending() 진입 action.payload -> ",
        //   action.payload
        // );
      })
      .addCase(getDiaryListAsync.rejected, (state, action) => {
        // console.log(
        //   "diarySlice.js getDiaryListAsync.rejected() 진입 action.payload -> ",
        //   action.payload
        // );
      })
      .addCase(postDiaryAsync.fulfilled, (state, action) => {
        // console.log(
        //   "diarySlice.js postDiaryAsync.fulfilled() 진입 action.payload -> ",
        //   action.payload
        // );
        //return action.payload;
      })
      .addCase(postDiaryAsync.pending, (state, action) => {
        // console.log(
        //   "diarySlice.js postDiaryAsync.pending() 진입 action.payload -> ",
        //   action.payload
        // );
      })
      .addCase(postDiaryAsync.rejected, (state, action) => {
        // console.log(
        //   "diarySlice.js postDiaryAsync.rejected() 진입 action.payload -> ",
        //   action.payload
        // );
      })
      .addCase(patchDiaryAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(deleteDiaryAsync.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default diarySlice.reducer;
