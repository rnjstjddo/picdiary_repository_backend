import { Navigate } from "react-router-dom";

const { Suspense, lazy } = require("react");

const Loading = <div>로딩중</div>;
const MoneyRead = lazy(() => import("../pages/money/MoneyReadPage"));
const MoneyList = lazy(() => import("../pages/money/MoneyListPage"));
const MoneyCreate = lazy(() => import("../pages/money/MoneyCreatePage"));
const MoneyModify = lazy(() => import("../pages/money/MoneyModifyPage"));
//const TodoRead = lazy(() => import("../pages/todo/ReadPage"));
//const TodoAdd = lazy(() => import("../pages/todo/AddPage"));
//const TodoModify = lazy(() => import("../pages/todo/ModifyPage"));

const moneyRouter = () => {
  return [
    {
      path: "read/:dateobject",
      element: (
        <Suspense fallback={Loading}>
          <MoneyRead />
        </Suspense>
      ),
    },
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <MoneyList />
        </Suspense>
      ),
    },
    {
      path: "modify/:dateobject/:choose",
      element: (
        <Suspense fallback={Loading}>
          <MoneyModify />
        </Suspense>
      ),
    },
    { path: "", element: <Navigate replace to="list" /> },
    {
      path: "create/:dateobject",
      element: (
        <Suspense fallback={Loading}>
          <MoneyCreate />
        </Suspense>
      ),
    },
  ];
};

export default moneyRouter;
