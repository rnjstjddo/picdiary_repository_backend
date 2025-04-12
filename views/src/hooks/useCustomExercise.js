import { useDispatch, useSelector } from "react-redux";
import {
  getExerciseListAsync,
  postExerciseAsync,
  patchExerciseAsync,
  deleteExerciseAsync,
} from "../slices/exerciseSlice";
import { replace, useNavigate } from "react-router-dom";

const useCustomExercise = () => {
  const exerciseState = useSelector((state) => state.exerciseSlice);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const postExerciseC = ({ diaryParam, picture }) => {
    const payload = dispatch(postExerciseAsync({ diaryParam, picture }));
    return payload; //thunk후 액션
  };

  //
  const getExerciseListC = async () => {
    await dispatch(getExerciseListAsync());
  };

  //수정
  const patchExerciseC = ({ exerciseParam }) => {
    const payload = dispatch(patchExerciseAsync({ exerciseParam }));
    return payload; //thunk에서 받은 액션결과전달
  };

  const moveToExerciseRead = (dateobject) => {
    navigate({ pathname: `../read/${dateobject}` });
  };

  const moveToExerciseList = () => {
    navigate({ pathname: "../", replace: "true" });
  };

  const moveToExerciseModify = ({ dateobject, whenchoose }) => {
    navigate({ pathname: `../modify/${dateobject}/${whenchoose}` });
  };

  const moveToExerciseCreate = (dateobject) => {
    navigate({ pathname: `../create/${dateobject}`, replace: "true" });
  };

  const deleteExerciseC = (id) => {
    const payload = dispatch(deleteExerciseAsync(id));
    return payload;
  };

  return {
    exerciseState,
    postExerciseC,
    deleteExerciseC,
    patchExerciseC,
    moveToExerciseRead,
    moveToExerciseModify,
    moveToExerciseCreate,
    getExerciseListC,
    moveToExerciseList,
  };
};

export default useCustomExercise;
