import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getChooseExercise, postExercise } from "../../api/exerciseApi";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
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

const ExerciseCreateComponent = () => {
  const { dateobject } = useParams();

  //조회에서 넘어오는값
  const [searchParams] = useSearchParams();

  const whenchoose = searchParams.get("whenchoose");

  const [exerciseParam, setExerciseParam] = useState(initState);
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
  const { moveToExerciseList, moveToExerciseCreate } = useCustomExercise();
  const navigate = useNavigate();
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const [firstblock, setFirstblock] = useState(false);
  const [secondblock, setSecondblock] = useState(false);
  const [thirdblock, setThirdblock] = useState(false);

  useEffect(() => {
    if (whenchoose) {
      console.log(
        "ExerciseCreateComponent.js 쿼리파라미터값 whenchoose -> ",
        whenchoose
      );
      exerciseParam["whenchoose"] = whenchoose;
      // setExerciseParam((prev) => {
      //   return { ...prev, exerciseParam };
      // });

      setExerciseParam({ ...exerciseParam });
    }

    return () => {
      setExerciseParam(initState);
    };
  }, []);

  const handleChange = useCallback(
    (e) => {
      console.log("handleChange() 진입", e.target.name, e.target.value);

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
      // setExerciseParam((prev) => {
      //   return { ...prev, exerciseParam };
      // });
      setExerciseParam({ ...exerciseParam });

      console.log(
        "handleChange() 진입 setExerciseParam() 결과 ",
        exerciseParam
      );
    },
    [exerciseParam]
  );

  useEffect(() => {
    if (dateobject !== "") {
      const getChooseExerciseEI = async () => {
        await getChooseExercise(dateobject)
          .then((result) => {
            console.log(
              "ExerciseCreateComponent.js useEffect() axios 결과 then() -> ",
              result
            );

            if (result.result.length !== 0) {
              console.log(
                "ExerciseCreateComponent.js useEffect() axios 결과 배열존재할경우 진입 -> "
              );

              let alertcontent = "";
              result.result.forEach((v) => {
                if (v === "1") {
                  console.log("1진입");
                  setFirstblock(true);
                  //const indexf = resultwhenchoose.indexOf("1");
                  //resultwhenchoose.splice(indexf, 1);
                  alertcontent += "아침 ";
                }
                if (v === "2") {
                  console.log("2진입");
                  setSecondblock(true);

                  //const indexf = resultwhenchoose.indexOf("2");
                  //resultwhenchoose.splice(indexf, 1);
                  alertcontent += "점심 ";
                }
                if (v === "3") {
                  console.log("3진입");
                  setThirdblock(true);
                  //        const indexf = resultwhenchoose.indexOf("3");
                  //      resultwhenchoose.splice(indexf, 1);
                  alertcontent += "저녁 ";
                }
              }); //forEach

              alert(
                dateobject +
                  "일자에 " +
                  alertcontent +
                  "운동은 이미 작성되어있습니다"
              );

              setVisible(true);
            } //if

            if (
              result.message === "Network Error" ||
              result.name === "AxiosError"
            ) {
              console.log(
                "ExerciseCreateComponent.js useEffect() axios 결과 then() 네트워크에러진입-> "
              );
              navigate("/login");
            }
          })
          .catch((err) => {
            console.log(
              "ExerciseCreateComponent.js useEffect() axios 결과 catch() -> ",
              err
            );
          });
      };

      getChooseExerciseEI();
    }
    return () => {
      //setChooseCheckArray(() => []);
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFirstblock(false);
      setSecondblock(false);
      setThirdblock(false);
    };
  }, []);

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

  //-----------------등록 form submit 이벤트
  const handleSubmitExercise = (e) => {
    console.log(
      "ExerciseCreateComponent.js handleSubmitExercise() 등록전 확인 exerciseParam -> ",
      exerciseParam
    );

    e.preventDefault();
    if (exerciseParam.whenchoose === "") {
      alert("운동시간을 선택해주세요");
      refQuantity.current.focus();

      return;
    }

    if (exerciseParam.choose === "") {
      alert("운동종목을 선택해주세요");
      refQuantity.current.focus();

      return;
    }

    if (exerciseParam.minute === "0") {
      alert("운동량을 입력해주세요");
      refQuantity.current.focus();
      return;
    }
    if (
      exerciseParam.choose !== "" &&
      exerciseParam.minute !== 0 &&
      exerciseParam.whenchoose !== ""
    ) {
      postExercise({ dateobject, exerciseParam })
        .then((result) => {
          console.log(
            "ExerciseCreateComponent.js handleSubmitExercise() axios then() result => ",
            result
          );
          console.log(
            "ExerciseCreateComponent.js handleSubmitExercise() axios then() result.result ->",
            result.result
          );
          if (result.result) {
            alert(dateobject + "일자 운동이 등록되었습니다.");
            moveToExerciseList();
          } else {
            alert(dateobject + "일자 운동등록을 실패했습니다.");
            moveToExerciseCreate({ dateobject });
          }
        })
        .catch((err) => {
          console.log(
            "ExerciseCreateComponent.js handleSubmitExercise() axios catch() ",
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

  return (
    <div className="container">
      <br />
      <br />

      <h4>운동관리</h4>
      <hr />
      <br />
      <Form.Group className="mb-3">
        <Form.Label>시간선택</Form.Label>

        <div key={`inline-radio`} className="mb-3">
          {!whenchoose && (
            <>
              <Image
                src="/img/biceps.png"
                style={{ width: "50px", height: "50px" }}
                rounded
              />
              &nbsp;
              <Form.Check
                inline
                label="아침"
                name="whenchoose"
                type={"radio"}
                value={1}
                onChange={handleChange}
                disabled={firstblock ? true : false}
              />
              &nbsp;&nbsp;
              <Image
                src="/img/tennis.png"
                style={{ width: "50px", height: "50px" }}
                rounded
              />
              &nbsp;
              <Form.Check
                inline
                label="점심"
                name="whenchoose"
                type={"radio"}
                value={2}
                onChange={handleChange}
                disabled={secondblock ? true : false}
              />
              &nbsp;&nbsp;
              <Image
                src="/img/basketball.png"
                style={{ width: "50px", height: "50px" }}
                rounded
              />
              &nbsp;
              <Form.Check
                inline
                label="저녁"
                name="whenchoose"
                type={"radio"}
                value={3}
                onChange={handleChange}
                disabled={thirdblock ? true : false}
              />
            </>
          )}
          {whenchoose && (
            <>
              <Image
                src="/img/biceps.png"
                style={{ width: "50px", height: "50px" }}
                rounded
              />
              &nbsp;
              {first ? (
                <Form.Check
                  inline
                  label="아침"
                  name="whenchoose"
                  type={"radio"}
                  value={1}
                  onChange={handleChange}
                  checked={true}
                />
              ) : (
                <Form.Check
                  inline
                  label="아침"
                  name="whenchoose"
                  type={"radio"}
                  value={1}
                  onChange={handleChange}
                  disabled={firstblock ? true : false}
                />
              )}
              &nbsp;&nbsp;
              <Image
                src="/img/tennis.png"
                style={{ width: "50px", height: "50px" }}
                rounded
              />
              &nbsp;
              {second ? (
                <Form.Check
                  inline
                  label="점심"
                  name="whenchoose"
                  type={"radio"}
                  value={2}
                  onChange={handleChange}
                  checked={true}
                />
              ) : (
                <Form.Check
                  inline
                  label="점심"
                  name="whenchoose"
                  type={"radio"}
                  value={2}
                  onChange={handleChange}
                  disabled={secondblock ? true : false}
                />
              )}
              &nbsp;&nbsp;
              <Image
                src="/img/basketball.png"
                style={{ width: "50px", height: "50px" }}
                rounded
              />
              &nbsp;
              {third ? (
                <Form.Check
                  inline
                  label="저녁"
                  name="whenchoose"
                  type={"radio"}
                  value={3}
                  onChange={handleChange}
                  checked={true}
                />
              ) : (
                <Form.Check
                  inline
                  label="저녁"
                  name="whenchoose"
                  type={"radio"}
                  value={3}
                  onChange={handleChange}
                  disabled={thirdblock ? true : false}
                />
              )}
            </>
          )}
        </div>
      </Form.Group>
      <br />
      <Form onSubmit={handleSubmitExercise}>
        <Form.Group className="mb-3">
          <Form.Label>운동항목</Form.Label>
          <br />
          <Form.Check
            inline
            type="radio"
            label="달리기"
            name="choose"
            value="1"
            // value={exerciseDetailParam.choose}
            onChange={handleChange}
          />
          <Form.Check
            inline
            type="radio"
            label="웨이트"
            value="2"
            name="choose"
            onChange={handleChange}

            //onChange={handleDetailChange}
          />
          <Form.Check
            inline
            type="radio"
            label="구기종목(야구,축구,농구 등)&복싱"
            value="3"
            name="choose"
            //onChange={handleDetailChange}
            onChange={handleChange}
          />
          <Form.Check
            inline
            type="radio"
            label="등산"
            value="4"
            name="choose"
            //onChange={handleDetailChange}
            onChange={handleChange}
          />
          <Form.Check
            inline
            type="radio"
            label="필라테스요가"
            value="5"
            name="choose"
            //onChange={handleDetailChange}

            onChange={handleChange}
          />
          <Form.Check
            inline
            type="radio"
            label="그외"
            value="6"
            name="choose"
            //onChange={handleDetailChange}
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>운동시간(단위:분)</Form.Label>
          <Form.Control
            type="text"
            name="minute"
            value={exerciseParam.minute || 0}
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
            value={exerciseParam.content || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        <Button variant="outline-primary" type="submit">
          운동등록
        </Button>
        &nbsp;
        <Link to={`../list`}>
          <Button variant="outline-secondary" type="button">
            운동달력이동
          </Button>
        </Link>
        &nbsp;
        <Link to={`/`}>
          <Button variant="outline-success" type="button">
            메인으로
          </Button>
        </Link>
      </Form>
      <br />
    </div>
  );
};

export default ExerciseCreateComponent;
