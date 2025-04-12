import { Navigate } from "react-router-dom";

const { Suspense, lazy } = require("react");

const Loading = <div>로딩중</div>;
const DiaryList = lazy(() => import("../pages/diary/DiaryListPage"));
const DiaryRead = lazy(() => import("../pages/diary/DiaryReadPage"));
const DiaryModify = lazy(() => import("../pages/diary/DiaryModifyPage"));
const DiaryCreate = lazy(() => import("../pages/diary/DiaryCreatePage"));
//const TodoRead = lazy(() => import("../pages/todo/ReadPage"));
//const TodoAdd = lazy(() => import("../pages/todo/AddPage"));
//const TodoModify = lazy(() => import("../pages/todo/ModifyPage"));

const diaryRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <DiaryList />
        </Suspense>
      ),
    },
    { path: "", element: <Navigate replace to="list" /> },
    {
      path: "create/:dateobject",
      element: (
        <Suspense fallback={Loading}>
          <DiaryCreate />
        </Suspense>
      ),
    },
    {
      path: "read/:id",
      element: (
        <Suspense fallback={Loading}>
          <DiaryRead />
        </Suspense>
      ),
    },
    {
      path: "modify/:id",
      element: (
        <Suspense fallback={Loading}>
          <DiaryModify />
        </Suspense>
      ),
    },
  ];
};

export default diaryRouter;
