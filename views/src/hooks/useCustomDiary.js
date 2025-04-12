import { useDispatch, useSelector } from "react-redux";
import {
  getDiaryListAsync,
  postDiaryAsync,
  patchDiaryAsync,
  deleteDiaryAsync,
} from "../slices/diarySlice";
import { useNavigate } from "react-router-dom";

const useCustomDiary = () => {
  const diaryState = useSelector((state) => state.diarySlice);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const postDiaryC = ({ diaryParam, picture }) => {
    const payload = dispatch(postDiaryAsync({ diaryParam, picture }));
    return payload; //thunk후 액션
  };

  //
  const getDiaryListC = async () => {
    await dispatch(getDiaryListAsync());
  };

  //수정
  const patchDiaryC = ({ diaryParam, picture }) => {
    const payload = dispatch(patchDiaryAsync({ diaryParam, picture }));
    return payload; //thunk에서 받은 액션결과전달
  };

  //추가
  const moveToDiaryRead = (id) => {
    navigate({ pathname: `../read/${id}` });
  };

  const moveToDiaryList = () => {
    navigate({ pathname: "../" });
  };

  //추가
  const moveToDiaryModify = (id) => {
    navigate({ pathname: `../modify/${id}` });
  };

  //추가
  const moveToDiaryCreate = (dateobject) => {
    navigate({ pathname: `../create/${dateobject}` });
  };

  const deleteDiaryC = (id) => {
    const payload = dispatch(deleteDiaryAsync(id));
    return payload;
  };

  return {
    diaryState,
    postDiaryC,
    //    getDiaryC,
    deleteDiaryC,
    patchDiaryC,
    moveToDiaryRead,
    moveToDiaryModify,
    moveToDiaryCreate,
    getDiaryListC,
    moveToDiaryList,
  };
};

export default useCustomDiary;
