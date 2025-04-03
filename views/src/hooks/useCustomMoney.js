import { useDispatch, useSelector } from "react-redux";
import {
  getMoneyListAsync,
  postMoneyAsync,
  patchMoneyAsync,
  deleteMoneyAsync,
} from "../slices/moneySlice";
import { useNavigate } from "react-router-dom";

const useCustomMoney = () => {
  const moneyState = useSelector((state) => state.MoneySlice);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const postMoneyC = ({
    moneyParam,
    finalExpenseObjectArray,
    finalIncomeObjectArray,
    dateobject,
  }) => {
    const payload = dispatch(
      postMoneyAsync({
        moneyParam,
        finalExpenseObjectArray,
        finalIncomeObjectArray,
        dateobject,
      })
    );
    return payload; //thunk후 액션
  };

  //
  const getMoneyListC = async () => {
    await dispatch(getMoneyListAsync());
  };

  //수정
  const patchMoneyC = ({
    moneyParam,
    finalExpenseObjectArray,
    finalIncomeObjectArray,
    dateobject,
    bigchoose,
  }) => {
    const payload = dispatch(
      patchMoneyAsync({
        moneyParam,
        finalExpenseObjectArray,
        finalIncomeObjectArray,
        dateobject,
        bigchoose,
      })
    );
    return payload; //thunk에서 받은 액션결과 리듀서함수로 전달
  };

  const moveToMoneyRead = (dateobject) => {
    navigate({ pathname: `../read/${dateobject}` });
  };

  const moveToMoneyList = () => {
    navigate({ pathname: "../" });
  };

  const moveToMoneyModify = (dateobject) => {
    navigate({ pathname: `../modify/${dateobject}` });
  };

  const moveToMoneyCreate = (dateobject) => {
    navigate({ pathname: `../create/${dateobject}` });
  };

  const deleteMoneyC = (id) => {
    const payload = dispatch(deleteMoneyAsync(id));
    return payload;
  };

  return {
    moneyState,
    postMoneyC,
    deleteMoneyC,
    patchMoneyC,
    moveToMoneyRead,
    moveToMoneyModify,
    moveToMoneyCreate,
    getMoneyListC,
    moveToMoneyList,
  };
};

export default useCustomMoney;
