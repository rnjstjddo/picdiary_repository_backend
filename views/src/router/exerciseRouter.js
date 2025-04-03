import { Navigate } from "react-router-dom";

const { Suspense, lazy } = require("react");

const Loading = <div>로딩중</div>;
const ExerciseRead = lazy(() => import("../pages/exercise/ExerciseReadPage"));
const ExerciseList = lazy(() => import("../pages/exercise/ExerciseListPage"));
const ExerciseModify = lazy(() =>
  import("../pages/exercise/ExerciseModifyPage")
);

const ExerciseCreate = lazy(() =>
  import("../pages/exercise/ExerciseCreatePage")
);
//const TodoRead = lazy(() => import("../pages/todo/ReadPage"));
//const TodoAdd = lazy(() => import("../pages/todo/AddPage"));
//const TodoModify = lazy(() => import("../pages/todo/ModifyPage"));

const exerciseRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <ExerciseList />
        </Suspense>
      ),
    },

    {
      path: "read/:dateobject",
      element: (
        <Suspense fallback={Loading}>
          <ExerciseRead />
        </Suspense>
      ),
    },
    {
      path: "modify/:dateobject/:whenchoose",
      element: (
        <Suspense fallback={Loading}>
          <ExerciseModify />
        </Suspense>
      ),
    },
    { path: "", element: <Navigate replace to="list" /> },
    {
      path: "create/:dateobject",
      element: (
        <Suspense fallback={Loading}>
          <ExerciseCreate />
        </Suspense>
      ),
    },
  ];
};

export default exerciseRouter;
