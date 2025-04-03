import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getExerciseList,
  postExercise,
  patchExercise,
  deleteExercise,
} from "../api/exerciseApi";

export const getExerciseListAsync = createAsyncThunk(
  "getExerciseListAsync",
  () => {
    return getExerciseList();
  }
);

export const postExerciseAsync = createAsyncThunk(
  "postExerciseAsync",
  (param) => {
    return postExercise(param);
  }
);

export const patchExerciseAsync = createAsyncThunk(
  "patchExerciseAsync",
  (param) => {
    return patchExercise(param);
  }
);

export const deleteExerciseAsync = createAsyncThunk(
  "deleteExerciseAsync",
  (param) => {
    return deleteExercise(param);
  }
);

const initState = [];

const exerciseSlice = createSlice({
  name: "exerciseSlice",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(getExerciseListAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(postExerciseAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(patchExerciseAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(deleteExerciseAsync.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default exerciseSlice.reducer;
