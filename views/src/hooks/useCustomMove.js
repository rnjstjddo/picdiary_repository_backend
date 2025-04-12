import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const getNum = (param, defaultValue) => {
  if (!param) {
    return defaultValue;
  }
  return parseInt(param);
};

const useCustomMove = () => {
  const navigate = useNavigate();

  const [refresh, setRefresh] = useState(false);

  const [queryParams] = useSearchParams();

  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  const queryDefault = createSearchParams({ page, size }).toString();

  const moveToList = (pageParam) => {
    let queryStr = "";

    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1);
      const sizeNum = getNum(pageParam.size, 10);

      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }
    //    navigate({ pathname: `../list`, search: queryStr });

    setRefresh(!refresh);
  }; //moveToList

  //추가
  const moveToModify = (num) => {
    navigate({ pathname: `../modify/${num}`, search: queryDefault });
  };

  //추가
  const moveToRead = (num) => {
    navigate({ pathname: `../read/${num}`, search: queryDefault });
  };

  //추가
  const moveToCreate = () => {
    navigate({ pathname: `../create` });
  };

  const moveToLogin = () => {
    navigate({ pathname: `/login` });
  };
  return {
    moveToList,
    page,
    size,
    moveToModify,
    refresh,
    moveToRead,
    moveToLogin,
    moveToCreate,
  };
};

export default useCustomMove;
