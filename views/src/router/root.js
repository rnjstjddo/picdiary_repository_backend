import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
//import IndexPage from "../pages/todo/IndexPage";
import dietRouter from "./dietRouter";
import diaryRouter from "./diaryRouter";
import exerciseRouter from "./exerciseRouter";
import moneyRouter from "./moneyRouter";
import Image from "react-bootstrap/Image";

const Loading = () => {
  return (
    <>
      <br />
      <br />
      <Image
        src="/img/cyclone.png"
        style={{ width: "30px", height: "30px" }}
        rounded
      />
      <span style={{ fontSize: "20px" }}>잠시만 기다려주세요!</span>
      <br />
      <br />
    </>
  );
};

const MainPage = lazy(() => import("../pages/MainPage"));
//const DietReadPage = lazy(() => import("../pages/DietReadPage"));
// const DietReadPage = lazy(() => import("../pages/DietReadPage"));
// const DietReadPage = lazy(() => import("../pages/DietReadPage"));
// const DietReadPage = lazy(() => import("../pages/DietReadPage"));
const LoginPage = lazy(() => import("../pages/member/LoginPage"));
const JoinPage = lazy(() => import("../pages/member/JoinPage"));
const LogoutPage = lazy(() => import("../pages/member/LogoutPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<Loading />}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: "join",
    element: (
      <Suspense fallback={<Loading />}>
        <JoinPage />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={Loading}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "logout",
    element: (
      <Suspense fallback={<Loading />}>
        <LogoutPage />
      </Suspense>
    ),
  },
  {
    path: "diet",
    // element: (
    //   <Suspense fallback={<Loading/>}>
    //     <DietReadPage />
    //   </Suspense>
    // ),
    children: dietRouter(),
  },
  {
    path: "diary",
    // element: (
    //   <Suspense fallback={<Loading/>}>
    //     <DietReadPage />
    //   </Suspense>
    // ),
    children: diaryRouter(),
  },
  {
    path: "exercise",
    // element: (
    //   <Suspense fallback={<Loading/>}>
    //     <DietReadPage />
    //   </Suspense>
    // ),
    children: exerciseRouter(),
  },
  {
    path: "money",
    // element: (
    //   <Suspense fallback={<Loading/>}>
    //     <DietReadPage />
    //   </Suspense>
    // ),
    children: moneyRouter(),
  },
  {
    //에러페이지 마지막위치
    path: "/*",
    element: (
      <Suspense fallback={<Loading />}>
        <ErrorPage />
      </Suspense>
    ),
  },
]);

export default root;
