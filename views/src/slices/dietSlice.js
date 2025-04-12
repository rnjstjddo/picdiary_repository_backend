import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDietList,
  postDiet,
  patchDiet,
  deleteDiet,
  getChooseDiet,
} from "../api/dietApi";

export const getDietListAsync = createAsyncThunk("getDietListAsync", () => {
  return getDietList();
});

export const postDietAsync = createAsyncThunk(
  "postDietAsync",
  ({ dietParam, finalObjectArray }) => {
    return postDiet({ dietParam, finalObjectArray });
  }
);

export const patchDietAsync = createAsyncThunk(
  "patchDietAsync",
  ({ choose, objectdate }) => {
    return patchDiet({ choose, objectdate });
  }
);

export const deleteDietAsync = createAsyncThunk(
  "deleteDietAsync",
  ({ choose, objectdate }) => {
    return deleteDiet({ choose, objectdate });
  }
);

// export const chooseDietAsync = createAsyncThunk("chooseDietAsync", (p) => {
//   return getChooseDiet();
// });

const initState = [];

const dietSlice = createSlice({
  name: "dietSlice",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(getDietListAsync.fulfilled, (state, action) => {
        console.log(
          "dietSlice.js getDietListAsync() fulfilled 진입 action ->",
          action
        );
        console.log(
          "dietSlice.js getDietListAsync() fulfilled 진입 action.payload ->",
          action.payload
        );

        // return action.payload;
      })
      .addCase(getDietListAsync.rejected, (state, action) => {
        console.log(
          "dietSlice.js getDietListAsync() rejected 진입 action ->  ",
          action
        );
      })
      .addCase(postDietAsync.fulfilled, (state, action) => {
        console.log(
          "dietSlice.js postDietAsync() fulfilled 진입 action ->",
          action
        );
      })
      .addCase(postDietAsync.rejected, (state, action) => {
        console.log(
          "dietSlice.js postDietAsync() rejected 진입 action ->",
          action
        );
      })
      .addCase(patchDietAsync.fulfilled, (state, action) => {
        console.log(
          "dietSlice.js patchDietAsync() fulfilled 진입 action ->",
          action
        );
      })
      .addCase(patchDietAsync.rejected, (state, action) => {
        console.log(
          "dietSlice.js patchDietAsync() rejected 진입 action ->",
          action
        );
      })
      .addCase(deleteDietAsync.fulfilled, (state, action) => {
        console.log(
          "dietSlice.js deleteDietAsync() fulfilled 진입 action ->",
          action
        );
      })
      .addCase(deleteDietAsync.rejected, (state, action) => {
        console.log(
          "dietSlice.js deleteDietAsync() rejected 진입 action ->",
          action
        );
      });
  },
});

export default dietSlice.reducer;
