import { configureStore } from "@reduxjs/toolkit";
import moneySlice from "./slices/moneySlice";
import dietSlice from "./slices/dietSlice";
import diarySlice from "./slices/diarySlice";
import exerciseSlice from "./slices/exerciseSlice";
import loginSlice from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
    moneySlice: moneySlice,
    dietSlice: dietSlice,
    exerciseSlice: exerciseSlice,
    diarySlice: diarySlice,
  },
});

export default store;
