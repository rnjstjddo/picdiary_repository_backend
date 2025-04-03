import { useCallback, useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  deleteExercise,
  getExerciseEach,
  patchExercise,
  postExercise,
} from "../../api/exerciseApi";
import { useParams, useSearchParams } from "react-router-dom";
import useCustomExercise from "../../hooks/useCustomExercise";
import Image from "react-bootstrap/Image";

const initState = {
  minute: 0,
  choose: "", //운동종류
  content: "",
  whenchoose: "",
};

const initDetailState = {
  minute: 0,
  choose: "", //운동종류,
  content: "",
};

const whenchooseSwitch = (whenchoose) => {
  if (!whenchoose) {
    return;
  }
  console.log(
    "whenchooseSwitch 매개변수 -> ",
    whenchoose,
    " typeof -> ",
    typeof whenchoose
  );
  switch (whenchoose) {
    case "1":
      return "아침";
    case "2":
      return "점심";
    case "3":
      return "저녁";
    default:
      return null;
  }
};

const ExerciseModifyComponent = () => {
  const { dateobject, whenchoose } = useParams();

  const [exerciseParam, setExerciseParam] = useState({ ...initState });
  const [exerciseDetailParam, setExerciseDetailParam] = useState({
    ...initDetailState,
  });
  const [chooseCheckArray, setChooseCheckArray] = useState([]);
  const [inputVisible, setInputVisible] = useState(true);
  const [visible, setVisible] = useState(false);
  const [detailVisible, setDetailVisible] = useState(false);

  const refQuantity = useRef(null);

  const [exerciseDetailFinalArray, setExerciseDetailFinalArray] = useState([]);
  const [finalObjectArray, setFinalObjectArray] = useState([]);
  const { moveToExerciseList, moveToExerciseRead, moveToExerciseModify } =
    useCustomExercise();

  //가져온다.
  useEffect(() => {
    const getExerciseEachEI = () =>
      getExerciseEach({ dateobject, whenchoose })
        .then((result) => {
          console.log(
            "ExerciseModifyComponent.js useEffect getExerciseEach() then() ",
            result
          );
          setExerciseParam(result);
        })
        .catch((err) => {
          console.log(
            "ExerciseModifyComponent.js useEffect getExerciseEach() then() ",
            err
          );
          moveToExerciseRead(dateobject);
        });
    getExerciseEachEI();
  }, []);

  const handleChange = useCallback((e) => {
    console.log(e.target.name, e.target.value);

    const regex = new RegExp(/^[0-9]+$/);

    if (e.target.name === "minute") {
      let value = Number(e.target.value);

      const result = regex.test(value);
      console.log("regex결과 ", result);
      if (!regex.test(value) || value === "NaN") {
        alert("운동시간은 숫자만 입력가능합니다.");
        refQuantity.current.value = 0;
        return;
      }
    }
    exerciseParam[e.target.name] = e.target.value;
    setExerciseParam({ ...exerciseParam });
  });

  //운동시간에 여러 운동등록할경우 필요
  const handleDetailChange = useCallback(
    (e) => {
      console.log(e.target.value, e.target.name);

      const regex = new RegExp(/^[0-9]+$/);

      if (e.target.name === "minute") {
        let value = Number(e.target.value);

        const result = regex.test(value);
        console.log("regex결과 ", result);
        if (!regex.test(value) || value === "NaN") {
          alert("운동시간은 숫자만 입력가능합니다.");
          refQuantity.current.value = 0;
          return;
        }
      }
      exerciseDetailParam[e.target.name] = e.target.value;
      setExerciseDetailParam({ ...exerciseDetailParam });
    },
    [exerciseDetailParam]
  );

  const chooseCheckbox = (number) => {
    console.log(
      "DietCreateComponent.js chooseCheckbox() 진입 매개변수 => ",
      number,
      "typeof -> ",
      typeof number
    );
    if (!number) {
      return;
    }
    const str = number;
    const arr = str.split("");
    console.log(
      "DietCreateComponent.js chooseCheckbox() 진입 배열변경 => ",
      arr
    );
    return arr;
  };

  const handleDetailOnClick = () => {
    //refDetailText.current = dietDetailParam.content + dietDetailParam.quantity;

    if (
      exerciseDetailParam.content === "" ||
      exerciseDetailParam.minute === 0
    ) {
      alert("내용을 모두 입력해주세요!");
      return;
    }

    const compound = exerciseDetailParam.content + exerciseDetailParam.minute;
    exerciseDetailFinalArray.forEach((i) =>
      console.log("dietDetailFinalArray -> ", i)
    );
    const sameResult = exerciseDetailFinalArray.filter((i) => i === compound);
    console.log("handleDetailOnclick sameResult-> ", sameResult);
    if (sameResult.length !== 0) {
      alert("이미 운동에 추가했습니다!");
      setExerciseDetailParam({ ...initDetailState });

      return;
    }
    setFinalObjectArray([
      ...finalObjectArray,
      {
        content: exerciseDetailParam.content,
        minute: exerciseDetailParam.minute,
        choose: exerciseDetailParam.choose,
      },
    ]);

    //    console.log("handleDetailOnclick -> ", compound);
    console.log("typeof -> ", typeof compound);
    setExerciseDetailFinalArray((dietDetailFinalArray) => [
      ...dietDetailFinalArray,
      compound,
    ]);
    setExerciseDetailParam({ ...initDetailState });
    setDetailVisible(true);
  };

  const handleSubmitExercise = (e) => {
    console.log(
      "ExerciseModifyComponent.js 수정전 확인 exerciseParam -> ",
      exerciseParam
    );

    e.preventDefault();

    if (window.confirm("위와 같이 운동을 수정하시겠습니까?")) {
      patchExercise({ dateobject, exerciseParam, whenchoose })
        .then((result) => {
          console.log(
            "ExerciseModifyComponent.js handleSubmitExercise() axios then() ",
            result
          );
          if (result) {
            alert(dateobject + "일자 운동이 수정되었습니다.");
            moveToExerciseRead(dateobject);
          } else {
            alert(dateobject + "일자 운동등록을 실패했습니다.");
            moveToExerciseModify({ dateobject, whenchoose });
          }
        })
        .catch((err) => {
          console.log(
            "ExerciseModifyComponent.js handleSubmitExercise() axios catch() ",
            err
          );
        });
    }
  };

  const handleDetailRemoveOnClick = (e) => {
    console.log(
      "handleDetailRemoveOnClick() dataset =>",
      e.target.dataset.finalcontent,
      "e.target.dataset.finalminute -> ",
      e.target.dataset.finalminute
    );
    const finalcontent = e.target.dataset.finalcontent;
    const finalminute = e.target.dataset.finalminute;

    // const newProduce = produce(dietDetailFinalArray, (draft) => {
    //   draft.filter((d) => d !== finalcontent);
    // });

    const newProduce = exerciseDetailFinalArray.filter(
      (i) => i !== `${finalcontent}${finalminute}`
    );
    console.log("handleDetailRemoveOnClick() newProduce =>", newProduce);
    setExerciseDetailFinalArray([...newProduce]);

    const newFinalObject = finalObjectArray.filter(
      (i) => i.content !== finalcontent && i.quantity !== finalminute
    );
    setFinalObjectArray([...newFinalObject]);
    return;
  };

  const handleRemoveOnClick = () => {
    console.log("ExerciseModifyComponent.js handleRemoveOnClick -> ");

    deleteExercise({ dateobject, whenchoose })
      .then((result) => {
        console.log(
          "ExerciseModifyComponent.js handleRemoveOnClick then -> ",
          result
        );
        if (result.result === "success") {
          alert(
            dateobject +
              " 일자의 " +
              whenchooseSwitch(whenchoose) +
              " 운동을 삭제했습니다."
          );
          moveToExerciseList();
        }
      })
      .catch((err) => {
        console.log(
          "ExerciseModifyComponent.js handleRemoveOnClick then -> ",
          err
        );
        moveToExerciseRead(dateobject);
      });
  };
  console.log(
    "ExerciseModifyComponent.js chooseCheckArray -> ",
    chooseCheckArray
  );
  return (
    <div className="container">
      <br />
      <br />

      <h4>운동관리</h4>
      <hr />
      <br />
      <Form onSubmit={handleSubmitExercise}>
        <Form.Group className="mb-3">
          <Form.Label>시간선택</Form.Label>

          <div key={`inline-radio`} className="mb-3">
            {chooseCheckArray.length === 0 && (
              <>
                <Image
                  src="/img/biceps.png"
                  style={{ width: "50px", height: "50px" }}
                  rounded
                />
                &nbsp;
                {whenchoose === "1" ? (
                  <Form.Check
                    inline
                    label="아침"
                    name="whenchoose"
                    type={"radio"}
                    value={whenchoose}
                    onChange={handleChange}
                    disabled
                    checked
                  />
                ) : (
                  <Form.Check
                    inline
                    label="아침"
                    name="whenchoose"
                    type={"radio"}
                    value={1}
                    onChange={handleChange}
                    disabled
                  />
                )}
                &nbsp;&nbsp;
                <Image
                  src="/img/tennis.png"
                  style={{ width: "50px", height: "50px" }}
                  rounded
                />
                &nbsp;
                {whenchoose === "2" ? (
                  <Form.Check
                    inline
                    label="점심"
                    name="whenchoose"
                    type={"radio"}
                    value={whenchoose}
                    onChange={handleChange}
                    disabled
                    checked
                  />
                ) : (
                  <Form.Check
                    inline
                    label="점심"
                    name="whenchoose"
                    type={"radio"}
                    value={2}
                    onChange={handleChange}
                    disabled
                  />
                )}
                &nbsp;&nbsp;
                <Image
                  src="/img/basketball.png"
                  style={{ width: "50px", height: "50px" }}
                  rounded
                />
                &nbsp;
                {whenchoose === "3" ? (
                  <Form.Check
                    inline
                    label="저녁"
                    name="whenchoose"
                    type={"radio"}
                    value={whenchoose}
                    onChange={handleChange}
                    checked
                    disabled
                  />
                ) : (
                  <Form.Check
                    inline
                    label="저녁"
                    name="whenchoose"
                    type={"radio"}
                    value={3}
                    onChange={handleChange}
                    disabled
                  />
                )}
              </>
            )}
            {chooseCheckArray &&
              chooseCheckArray.map((i) => (
                <>
                  {i === "1" ? (
                    <Form.Check
                      inline
                      label="아침"
                      name="whenchoose"
                      type={"radio"}
                      value={1}
                      onChange={handleChange}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="아침"
                      name="whenchoose"
                      type={"radio"}
                      value={1}
                      onChange={handleChange}
                    />
                  )}
                  {i === "2" ? (
                    <Form.Check
                      inline
                      label="점심"
                      name="whenchoose"
                      type={"radio"}
                      value={2}
                      onChange={handleChange}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="점심"
                      name="whenchoose"
                      type={"radio"}
                      value={2}
                      onChange={handleChange}
                    />
                  )}
                  {i === "3" ? (
                    <Form.Check
                      inline
                      label="저녁"
                      name="whenchoose"
                      type={"radio"}
                      value={3}
                      onChange={handleChange}
                      disabled={"true"}
                    />
                  ) : (
                    <Form.Check
                      inline
                      label="whenchoose"
                      name="choose"
                      type={"radio"}
                      value={3}
                      onChange={handleChange}
                    />
                  )}
                </>
              ))}
          </div>
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>운동항목</Form.Label>
          <br />
          {exerciseParam.choose === "1" ? (
            <Form.Check
              inline
              type="radio"
              label="달리기"
              name="choose"
              value={exerciseParam.choose}
              onChange={handleChange}
              checked
            />
          ) : (
            <Form.Check
              inline
              type="radio"
              label="달리기"
              name="choose"
              value="1"
              onChange={handleChange}
            />
          )}
          {exerciseParam.choose === "2" ? (
            <Form.Check
              inline
              type="radio"
              label="웨이트"
              value={exerciseParam.choose}
              name="choose"
              onChange={handleChange}
              checked
            />
          ) : (
            <Form.Check
              inline
              type="radio"
              label="웨이트"
              value={exerciseParam.choose}
              name="choose"
              onChange={handleChange}
            />
          )}
          {exerciseParam.choose === "3" ? (
            <Form.Check
              inline
              type="radio"
              label="구기종목(야구,축구,농구 등)&복싱"
              value={exerciseParam.choose}
              name="choose"
              onChange={handleChange}
              checked
            />
          ) : (
            <Form.Check
              inline
              type="radio"
              label="구기종목(야구,축구,농구 등)&복싱"
              value="3"
              name="choose"
              onChange={handleChange}
            />
          )}
          {exerciseParam.choose === "4" ? (
            <Form.Check
              inline
              type="radio"
              label="등산"
              value={exerciseParam.choose}
              name="choose"
              onChange={handleChange}
              checked
            />
          ) : (
            <Form.Check
              inline
              type="radio"
              label="등산"
              value="4"
              name="choose"
              onChange={handleChange}
            />
          )}
          {exerciseParam.choose === "5" ? (
            <Form.Check
              inline
              type="radio"
              label="필라테스요가"
              value={exerciseParam.choose}
              name="choose"
              onChange={handleChange}
              checked
            />
          ) : (
            <Form.Check
              inline
              type="radio"
              label="필라테스요가"
              value="5"
              name="choose"
              onChange={handleChange}
            />
          )}

          {exerciseParam.choose === "6" ? (
            <Form.Check
              inline
              type="radio"
              label="그외"
              value={exerciseParam.choose}
              name="choose"
              onChange={handleChange}
              checked
            />
          ) : (
            <Form.Check
              inline
              type="radio"
              label="그외"
              value="6"
              name="choose"
              onChange={handleChange}
            />
          )}
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>운동시간(단위:분)</Form.Label>
          <Form.Control
            type="text"
            name="minute"
            value={exerciseParam.minute}
            onChange={handleChange}
            ref={refQuantity}
            required
          />{" "}
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>운동내용&후기</Form.Label>
          <Form.Control
            type="text"
            name="content"
            value={exerciseParam.content}
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        <Button variant="outline-primary" type="submit">
          운동량수정완료
        </Button>
        &nbsp;
        <Button
          variant="outline-danger"
          type="button"
          onClick={() => handleRemoveOnClick()}
        >
          삭제하기
        </Button>
      </Form>
      <br />
    </div>
  );
};
export default ExerciseModifyComponent;
