import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import useCustomDiet from "../../hooks/useCustomDiet";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { deleteDiet, getDietEach, patchDiet } from "../../api/dietApi";

const chooseReturn = (number) => {
  // console.log(
  //   "DietCreateComponent.js chooseReturn() 진입 매개변수 => ",
  //   number,
  //   "typeof -> ",
  //   typeof number
  // );
  if (!number) {
    return;
  }
  const str = number;
  const arr = str.split("");
  //console.log("DietCreateComponent.js chooseReturn() 진입 배열변경 => ", arr);
  let result = "";
  for (let n of arr) {
    switch (n) {
      case "1":
        return (result = "🥦아침");
      case "2":
        return (result = "🍄점심");
      case "3":
        return (result = "🧅저녁");
      case "4":
        return (result = "🧄간식");
      default:
        return null;
    }
  }
  //console.log(result);
};

const chooseSwitch = (choose) => {
  if (!choose) {
    return;
  }
  //console.log("chooseSwitch 매개변수 -> ", choose);
  switch (choose) {
    case "1":
      return "아침";
    case "2":
      return "점심";
    case "3":
      return "저녁";
    case "4":
      return "간식";
    default:
      return "아침";
  }
};

const chooseCheckbox = (number) => {
  // console.log(
  //   "DietCreateComponent.js chooseCheckbox() 진입 매개변수 => ",
  //   number,
  //   "typeof -> ",
  //   typeof number
  // );
  if (!number) {
    return;
  }
  const str = number;
  const arr = str.split("");
  //console.log("DietCreateComponent.js chooseCheckbox() 진입 배열변경 => ", arr);
  return arr;
};

//Dietdetail quantity choose content dateobject email 5개
//수정리액트상태 quantity choose content dateobject email compound배열

const initDetailState = {
  content: "",
  quantity: 0,
  choose: "",
  dateobject: "",
  email: "",
  compound: [], //Diet모델에 넣을것
};

//initState -> content, quantity, email, choose,dataobject
//initDetailState -> content, quantity

const DietModifyComponent = () => {
  const [dietModifyParam, setDietModifyParam] = useState(initDetailState);
  const refQuantity = useRef(null);

  const { choose, dateobject } = useParams();
  const [chooseResult, setChooseResult] = useState("");
  const [dietModifyFinalArray, setDietModifyFinalArray] = useState([]);
  const [finalObjectArray, setFinalObjectArray] = useState([]);
  const [chooseCheckArray, setChooseCheckArray] = useState([]);
  const [detailVisible, setDetailVisible] = useState(false);
  const [inputVisible, setInputVisible] = useState(true);
  let { loginState } = useCustomLogin();
  const {
    patchDietC,
    moveToDietList,
    moveToDietModify,
    deleteDietC,
    moveToDietRead,
  } = useCustomDiet();
  const navigate = useNavigate();

  // console.log(
  //   "DietModifyComponent.js 경로값확인 choose-> ",
  //   choose,
  //   ", dateobject -> ",
  //   dateobject
  // );

  const handleModifyChange = useCallback(
    (e) => {
      //console.log(e.target.value, e.target.name);
      //console.log(dietModifyParam);

      const regex = new RegExp(/^[0-9]+$/);

      if (e.target.name === "quantity") {
        let value = Number(e.target.value);

        const result = regex.test(value);
        //console.log("결과 ", result);
        if (!regex.test(value) || value === "NaN") {
          alert("식단 양은 숫자만 입력가능합니다.");
          refQuantity.current.value = 0;
          return;
        }
      }
      dietModifyParam[e.target.name] = e.target.value;
      setDietModifyParam((prev) => {
        return { ...prev, dietModifyParam };
      });
    },
    [dietModifyParam]
  );

  const handleDetailOnClick = () => {
    //refDetailText.current = dietDetailParam.content + dietDetailParam.quantity;

    if (dietModifyParam.content === "" || dietModifyParam.quantity === 0) {
      alert("내용을 모두 입력해주세요!");
      return;
    }

    const compound = dietModifyParam.content + dietModifyParam.quantity;
    //console.log("dietModifyParam 입력한 속성값 합침 -> ", compound);

    //dietModifyFinalArray.forEach((i) =>
    //console.log("dietDetailFinalArray -> ", i)
    //);
    const sameResult = dietModifyFinalArray.filter((i) => i === compound);
    //console.log("handleDetailOnclick sameResult-> ", sameResult);
    if (sameResult.length !== 0) {
      alert("이미 식단에 추가했습니다!");
      setDietModifyParam(initDetailState);

      return;
    }

    // console.log(
    //   "★★ dietModifyParam.quantity 타입확인",
    //   typeof dietModifyParam.quantity
    // );
    setFinalObjectArray([
      ...finalObjectArray,
      {
        content: dietModifyParam.content,
        quantity: Number(dietModifyParam.quantity),
      },
    ]);

    setDietModifyFinalArray((dietDetailFinalArray) => [
      ...dietDetailFinalArray,
      compound,
    ]);

    dietModifyParam["content"] = "";
    dietModifyParam["quantity"] = 0;
    setDietModifyParam((prev) => {
      return dietModifyParam;
    });
    setDetailVisible(true);
  };

  //------------------------수정이벤트핸들러 submit버튼처리
  const handleModifyDiet = (e) => {
    e.preventDefault();

    // console.log(
    //   "handleModifyDiet() 내 e.target.choose.value-> ",
    //   e.target.choose.value
    // );
    setInputVisible(false);
    if (dietModifyFinalArray.length === 0) {
      alert("식단내용을 입력해주세요!");
      setInputVisible(true);
      return;
    }
    // console.log("refQuantity.current -> ", refQuantity.current);
    // dietModifyParam["choose"] = choose;
    // dietModifyParam["email"] = loginState;
    // dietModifyParam["dateobject"] = dateobject;
    // dietModifyParam["compond"] = dietModifyFinalArray;

    // setDietModifyParam(dietModifyParam)
    //initState -> content, quantity, email, choose,dataobject
    //initDetailState -> content, quantity

    // const dietDetailFinalObject = dietModifyFinalArray.join(" ");
    // console.log(
    //   "DietCreateComponent.js dietDetailFinalObject 문자열로 만듬 -> ",
    //   dietDetailFinalObject
    // );
    //dietModifyParam["quantity"] = 0;
    //dietModifyParam["content"] = dietDetailFinalObject;
    //setDietModifyParam({ ...dietModifyParam });
    //console.log("DietCreateComponent.js handleModifyDiet -> ", dietModifyParam);

    // const { picture } = e.target;
    // postDietC({ dietParam, picture })

    // console.log(
    //   "DietCreateComponent.js finalObjectArray -> ",
    //   finalObjectArray
    // );

    //수정 보냄 axios
    patchDiet({ finalObjectArray, choose, dateobject })
      .then((result) => {
        // console.log(
        //   "DietCreateComponent.js axios patchDietC then() 진입 -> ",
        //   result
        // );
        if (result.result === "success") {
          alert(dateobject + " 일자 식단 수정했습니다.!");
          // if (result.payload.image) {
          //   URL.revokeObjectURL(image);
          //   setImage("");
          // }
          //console.log(result.id);
          dietModifyParam["content"] = "";
          dietModifyParam["quantity"] = 0;
          setDietModifyParam((prev) => {
            return dietModifyParam;
          });
          moveToDietRead({ choose, dateobject });
        }
        if (result.error) {
          //console.log("result.error -> ", result.error);
          alert(dateobject + " 일자 식단 수정 실패했습니다.");
          moveToDietModify({ choose, dateobject });
        }
      })
      .catch((err) => {
        //console.log("DietCreateComponent.js axios patchDietC catch()", err);
        alert(dateobject + "일자 식단 수정 실패했습니다.");
        moveToDietModify({ choose, dateobject });
      });
  };

  const handleDetailRemoveOnClick = (e) => {
    //console.log(
    //   "handleDetailRemoveOnClick() dataset =>",
    //   e.target.dataset.finalcontent,
    //   "e.target.dataset.finalquantity -> ",
    //   e.target.dataset.finalquantity
    // );
    const finalcontent = e.target.dataset.finalcontent;
    const finalquantity = e.target.dataset.finalquantity;

    // const newProduce = produce(dietDetailFinalArray, (draft) => {
    //   draft.filter((d) => d !== finalcontent);
    // });

    const newProduce = dietModifyFinalArray.filter(
      (i) => i !== `${finalcontent}${finalquantity}`
    );
    //console.log("handleDetailRemoveOnClick() newProduce =>", newProduce);
    setDietModifyFinalArray([...newProduce]);

    const newFinalObject = finalObjectArray.filter(
      (i) => i.content !== finalcontent && i.quantity !== finalquantity
    );
    setFinalObjectArray([...newFinalObject]);
    return;
  };

  //-----------------------------------식단삭제
  const handleDeleteOnClick = () => {
    if (window.confirm("해당 식단을 삭제하십니까?")) {
      deleteDiet({ choose, dateobject })
        .then((result) => {
          //console.log("DietModifyComponent.js then() 진입 ", result.data);
          if (result.result === "success") {
            alert(dateobject + "일자의 식단이 삭제되었습니다.");

            moveToDietList();
          }
          if (result.error === "error") {
            alert(dateobject + "일자의 식단 삭제를 실패했습니다.");
            moveToDietRead({ dateobject, choose });
          }
        })
        .catch((err) => {
          //console.log("DietModifyComponent.js catch() 진입 ", err);
          // alert(dietParam.dateobject + "일자의 식단 삭제를 실패했습니다.");
          moveToDietRead({ dateobject, choose });
        });
    } //window.confirm
  };

  //받아옴

  //dietModifyFianlArray 는 밥200 문자열 배열구성
  //finalObjectArray 분리되어 content, quantitty 객체배열구성 -> detailVisible 보임

  useEffect(() => {
    const getDietEachEI = () =>
      getDietEach({ choose, dateobject })
        .then((result) => {
          //console.log("DietModifyComponent.js useEffect() then() -> ", result);

          result.forEach((i) => {
            const compound = i.content + i.quantity;
            //console.log("compound -> ", compound);
            setDietModifyFinalArray((prev) => [...prev, compound]);
            const newFinalObject = { content: i.content, quantity: i.quantity };
            setFinalObjectArray((prev) => [...prev, newFinalObject]);
          });
          setDetailVisible(true);
        })
        .catch((err) => {
          //console.log("DietModifyComponent.js useEffect() catch() -> ", err);
        });
    getDietEachEI();

    return () => {
      setDietModifyFinalArray([]);
      setFinalObjectArray([]);
    };
  }, []);
  //console.log("dietModifyFinalArray -> ", dietModifyFinalArray);

  return (
    <div className="container">
      <br />
      <br />

      <h4>식단수정</h4>
      <hr />
      <br />

      <Form onSubmit={handleModifyDiet}>
        <Form.Group className="mb-3">
          <Form.Label>식단일자</Form.Label>
          <Form.Control
            type="text"
            name="dateobject"
            value={dateobject}
            disabled
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>시간선택</Form.Label>

          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              inline
              label="아침"
              name="choose"
              type={"radio"}
              value={1}
              // onChange={handleChange}
              disabled
              checked={choose === "1" ? true : false}
            />
            <Form.Check
              inline
              label="점심"
              name="choose"
              type={"radio"}
              value={2}
              //onChange={handleChange}
              disabled
              checked={choose === "2" ? true : false}
            />
            <Form.Check
              inline
              label="저녁"
              name="choose"
              type={"radio"}
              value={3}
              //onChange={handleChange}
              disabled
              checked={choose === "3" ? true : false}
            />
            <Form.Check
              inline
              label="간식"
              name="choose"
              type={"radio"}
              value={4}
              //onChange={handleChange}
              disabled
              checked={choose === "4" ? true : false}
            />
          </div>
        </Form.Group>
        <br />
        {detailVisible && (
          <>
            {/* {dietDetailFinalArray.map((i, index) => ( */}
            {finalObjectArray.map((i, index) => (
              <React.Fragment key={index}>
                {/* <Form key={index}> */}
                <InputGroup className="mb-3">
                  <InputGroup.Text>내용&nbsp;&nbsp;</InputGroup.Text>
                  <Form.Control
                    type="text"
                    readOnly
                    value={`${i.content}${i.quantity}`}
                  />
                  <Button
                    variant="outline-danger"
                    type="button"
                    data-finalcontent={i.content}
                    data-finalquantity={i.quantity}
                    onClick={handleDetailRemoveOnClick}
                  >
                    삭제
                  </Button>
                </InputGroup>
                {/* </Form> */}
              </React.Fragment>
            ))}
          </>
        )}
        {inputVisible && (
          <>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Text>내용&nbsp;&nbsp;</InputGroup.Text>
              <Form.Control
                type="text"
                name="content"
                value={dietModifyParam.content}
                onChange={handleModifyChange}
              />
              <InputGroup.Text>양(단위 g/ml)&nbsp;&nbsp;</InputGroup.Text>
              <Form.Control
                type="text"
                name="quantity"
                value={dietModifyParam.quantity}
                onChange={handleModifyChange}
                ref={refQuantity}
              />

              <Button
                variant="outline-warning"
                type="button"
                onClick={handleDetailOnClick}
              >
                추가
              </Button>
            </InputGroup>
            <br />
          </>
        )}
        <Button variant="outline-primary" type="submit">
          식단수정완료
        </Button>
        &nbsp;&nbsp;
        <Button
          variant="outline-warning"
          type="button"
          onClick={() => handleDeleteOnClick()}
        >
          식단삭제
        </Button>
        &nbsp;
        <Link to={`../`}>
          <Button variant="outline-secondary">식단 달력이동</Button>
        </Link>
        <br />
        <br />
      </Form>
    </div>
  );
};

export default DietModifyComponent;
