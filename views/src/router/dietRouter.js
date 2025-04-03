import { Navigate } from "react-router-dom";

const { Suspense, lazy } = require("react");

const Loading = <div>로딩중</div>;
const DietRead = lazy(() => import("../pages/diet/DietReadPage"));
const DietList = lazy(() => import("../pages/diet/DietListPage"));
const DietModify = lazy(() => import("../pages/diet/DietModifyPage"));
const DietCreate = lazy(() => import("../pages/diet/DietCreatePage"));
const DietReadAll = lazy(() => import("../pages/diet/DietReadAllPage"));
//const TodoRead = lazy(() => import("../pages/todo/ReadPage"));
//const TodoAdd = lazy(() => import("../pages/todo/AddPage"));
//const TodoModify = lazy(() => import("../pages/todo/ModifyPage"));

const dietRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <DietList />
        </Suspense>
      ),
    },
    { path: "", element: <Navigate replace to="list" /> },
    {
      path: "create/:dateobject",
      element: (
        <Suspense fallback={Loading}>
          <DietCreate />
        </Suspense>
      ),
    },
    {
      path: "read/:choose/:dateobject",
      element: (
        <Suspense fallback={Loading}>
          <DietRead />
        </Suspense>
      ),
    },
    {
      path: "readall/:dateobject",
      element: (
        <Suspense fallback={Loading}>
          <DietReadAll />
        </Suspense>
      ),
    },
    {
      path: "modify/:dateobject/:choose",
      element: (
        <Suspense fallback={Loading}>
          <DietModify />
        </Suspense>
      ),
    },
  ];
};

export default dietRouter;
