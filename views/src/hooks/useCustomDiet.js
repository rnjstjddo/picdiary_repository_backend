import { useDispatch, useSelector } from "react-redux";
import {
  getDietListAsync,
  postDietAsync,
  patchDietAsync,
  deleteDietAsync,
} from "../slices/dietSlice";
import { useNavigate } from "react-router-dom";

const useCustomDiet = () => {
  const dietState = useSelector((state) => state.dietSlice);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //  const postDietC = ({ dietParam, picture }) => {

  const postDietC = ({ dietParam, finalObjectArray }) => {
    const payload = dispatch(postDietAsync({ dietParam, finalObjectArray }));
    return payload; //thunk후 액션
  };

  //
  const getDietListC = async () => {
    await dispatch(getDietListAsync());
  };

  //수정
  // 사진존재시 const patchDietC = ({ diaryParam, picture }) => {
  const patchDietC = (diaryParam) => {
    const payload = dispatch(patchDietAsync(diaryParam));
    return payload; //thunk에서 받은 액션결과전달
  };

  //추가
  const moveToDietRead = ({ dateobject, choose }) => {
    navigate({ pathname: `../read/${choose}/${dateobject}`, replace: "true" });
  };

  //추가
  const moveToDietReadAll = (dateobject) => {
    navigate({ pathname: `../readall/${dateobject}` });
  };

  const moveToDietList = () => {
    navigate({ pathname: "../", replace: "true" });
  };

  //추가
  const moveToDietModify = ({ choose, dateobject }) => {
    navigate({ pathname: `../modify/${dateobject}/${choose}` });
  };

  //추가
  const moveToDietCreate = (dateobject) => {
    navigate({ pathname: `../create/${dateobject}` });
  };

  const deleteDietC = ({ choose, dateobject }) => {
    const payload = dispatch(deleteDietAsync({ choose, dateobject }));
    return payload;
  };

  return {
    dietState,
    postDietC,
    //    getDietC,
    deleteDietC,
    moveToDietReadAll,
    patchDietC,
    moveToDietRead,
    moveToDietModify,
    moveToDietCreate,
    getDietListC,
    moveToDietList,
  };
};

export default useCustomDiet;
