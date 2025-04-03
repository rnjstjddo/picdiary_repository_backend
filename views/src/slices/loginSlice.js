import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { joinPost, loginPost, logoutGet, forSession } from "../api/memberApi";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

const initState = {
  email: "",
};

//애플리케이션 로딩시 쿠키값가져오기
const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  console.log(
    "loginSlice.js loadMemberCookie() 진입 애플리케이션로딩시 member 이름 쿠키가져옴 -> ",
    memberInfo
  );
  const accessToken = getCookie("accessToken");

  if (memberInfo && memberInfo.user) {
    // if (memberInfo && memberInfo.nickname) {
    //   memberInfo.nickname = decodeURIComponent(memberInfo.nickname);
    // }
    return memberInfo.user.email;
  }
  return { ...initState };
};

//비동기 세션생성위해 로그인후 재요청
export const forSessionAsync = createAsyncThunk("forSessionAsync", (param) => {
  return forSession(param);
});

//비동기 로그인
export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

//비동기 회원가입
export const joinPostAsync = createAsyncThunk("joinPostAsync", (param) => {
  return joinPost(param);
});

//비동기 로그아웃
export const logoutGetAsync = createAsyncThunk("logoutGetAsync", () => {
  return logoutGet();
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadMemberCookie() || initState,
  // initialState: initState,

  reducers: {
    // login: (state, action) => {
    //   const data = action.payload;
    //   console.log(
    //     "loginSlice에서 login액션함수에서 axios 후 결과 payload담긴값 확인 => ",
    //     data
    //   );
    //   //쿠키담기
    //   //setCookie("member", JSON.stringify(data), 1);
    //   //return data;
    //   return { email: data };
    // },
    //  logout: (state, action) => {
    //removeCookie("member");
    //  console.log(
    //  "loginSlice에서 logout 액션함수에서 axios 후 결과 payload담긴값 확인 => ",
    //action.payload
    //);
    //return { ...initState };
    //},
    // join: (state, action) => {
    //   const data = action.payload;
    //   return data;
    // },
  },
  //비동기
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        const payload = action.payload;
        console.log(
          "loginSlice에서 loginPostAsync 리듀서함수에서 fulfilled 진입 payload담긴값 확인 => ",
          payload
        );
        console.log(
          "loginSlice에서 loginPostAsync 리듀서함수에서 fulfilled 진입 리듀서의 state => ",
          state
        );

        //쿠키담기
        if (!payload.error) {
          setCookie("member", JSON.stringify(payload), 1);
        }
        return payload.user.email; //상태변경
      })
      .addCase(loginPostAsync.pending, (state, action) => {})
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log(
          "loginSlice에서 loginPostAsync 리듀서함수에서 rejected 진입 payload담긴값 확인 => ",
          action.payload
        );
      })
      .addCase(joinPostAsync.fulfilled, (state, action) => {
        const payload = action.payload;

        console.log(
          "loginSlice에서 joinPostAsync 리듀서함수에서 fulfilled 진입 payload담긴값 확인 => ",
          payload
        );
        //return payload;
      })
      .addCase(joinPostAsync.pending, (state, action) => {
        console.log(
          "loginSlice에서 joinPostAsync 리듀서함수에서 pending 진입 payload담긴값 확인 => ",
          action
        );
      })
      .addCase(joinPostAsync.rejected, (state, action) => {
        const payload = action.payload;
        console.log(
          "loginSlice에서 joinPostAsync 리듀서함수에서 rejected 진입 payload담긴값 확인 => ",
          payload
        );
      })
      .addCase(logoutGetAsync.fulfilled, (state, action) => {
        const payload = action.payload;

        console.log(
          "loginSlice에서 logoutGetAsync 리듀서함수에서 fulfilled 진입 payload담긴값 확인 => ",
          payload
        );
        removeCookie("member");
        removeCookie("accessToken");

        return { ...initState };
      })
      .addCase(logoutGetAsync.pending, (state, action) => {})
      .addCase(logoutGetAsync.rejected, (state, action) => {
        const payload = action.payload;
        console.log(
          "loginSlice에서 logoutGetAsync 리듀서함수에서 rejected 진입 payload담긴값 확인 => ",
          payload
        );
      })
      .addCase(forSessionAsync.fulfilled, (state, action) => {
        const payload = action.payload;
        console.log(
          "loginSlice에서 forSessionAsync 리듀서함수에서 fulfilled 진입 payload담긴값 확인 => ",
          payload
        );
        return payload;
      })
      .addCase(forSessionAsync.pending, (state, action) => {})
      .addCase(forSessionAsync.rejected, (state, action) => {
        const payload = action.payload;
        console.log(
          "loginSlice에서 forSessionAsync 리듀서함수에서 rejected 진입 payload담긴값 확인 => ",
          payload
        );
      });
  },
});

export const { login, logout, join } = loginSlice.actions;

export default loginSlice.reducer;
