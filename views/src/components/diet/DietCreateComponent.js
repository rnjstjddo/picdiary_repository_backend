import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import useCustomDiet from "../../hooks/useCustomDiet";
import { getChooseDiet } from "../../api/dietApi";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { produce } from "immer";

const initState = {
  quantity: 0,
  choose: null,
  content: "",
  dateobject: "",
  email: "", //UserId 외래키
};

const chooseReturn = (number) => {
  if (!number) {
    return;
  }
  const str = number;
  const arr = str.split("");
  let result = "";
  for (let n of arr) {
    switch (n) {
      case "1":
        result += "아침 ";
        break;
      case "2":
        result += "점심 ";
        break;

      case "3":
        result += "저녁 ";
        break;

      case "4":
        result += "간식 ";
        break;
      default:
        result += "";
        break;
    }
  }
  console.log("DietCreateComponent.js chooseReturn() 진입 결과 ->", result);

  return result;
};

const chooseSwitch = (choose) => {
  if (!choose) {
    return;
  }
  console.log("chooseSwitch 매개변수 -> ", choose);
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
  if (!number) {
    return;
  }
  const str = number;
  const arr = str.split("");
  console.log("DietCreateComponent.js chooseCheckbox() 진입 배열변경 => ", arr);
  return arr;
};

const initDetailState = {
  content: "",
  quantity: 0,
};
//initState -> content, quantity, email, choose,dataobject
//initDetailState -> content, quantity
const DietCreateComponent = () => {
  //쿼리스트링
  const [searchParams] = useSearchParams();

  const choose = searchParams.get("choose");
  if (choose) {
    console.log(
      "DietCreateComponent.js 파라미터 choose 존재할경우 -> ",
      choose
    );
  }

  const [dietParam, setDietParam] = useState({ ...initState });
  //이미 작성한식단 choose 가져오기
  // const [dietChoose, setDietChoose] = useState("");
  const [visible, setVisible] = useState(false);
  const refQuantity = useRef(null);

  const [dietDetailParam, setDietDetailParam] = useState({
    ...initDetailState,
  });
  const [detailVisible, setDetailVisible] = useState(false);
  //    const [image, setImage] = useState("");

  const [inputVisible, setInputVisible] = useState(true);
  const { postDietC, moveToDietRead, moveToDietCreate, moveToDietList } =
    useCustomDiet();
  let { loginState } = useCustomLogin();
  var { dateobject } = useParams();
  const [chooseResult, setChooseResult] = useState("");
  const [dietDetailFinalArray, setdietDetailFinalArray] = useState([]);
  const [finalObjectArray, setFinalObjectArray] = useState([]);
  const [chooseCheckArray, setChooseCheckArray] = useState([]);
  const radiofirst = useRef(null);
  const radiosecond = useRef(null);
  const radiothird = useRef(null);
  const radiofourth = useRef(null);

  const { exceptionHandle } = useCustomLogin();

  // useEffect(() => {
  // setChooseCheckArray([]);
  //   setChooseResult("");
  // }, []);

  const handleChange = useCallback(
    (e) => {
      console.log(e.target.value, e.target.name);

      const regex = new RegExp(/^[0-9]+$/);

      if (e.target.name === "quantity") {
        let value = Number(e.target.value);

        const result = regex.test(value);
        console.log("결과 ", result);
        if (!regex.test(value) || value === "NaN") {
          alert("식단 양은 숫자만 입력가능합니다.");
          refQuantity.current.value = 0;
          return;
        }
      }

      dietParam[e.target.name] = e.target.value;
      setDietParam({ ...dietParam });
    },
    [dietParam]
  );
  const refDetailText = useRef("");

  const handleDetailChange = useCallback(
    (e) => {
      //console.log(e.target.value, e.target.name);

      const regex = new RegExp(/^[0-9]+$/);

      if (e.target.name === "quantity") {
        let value = Number(e.target.value);

        const result = regex.test(value);
        // console.log("regex결과 ", result);
        if (!regex.test(value) || value === "NaN") {
          alert("식단 양은 숫자만 입력가능합니다.");
          refQuantity.current.value = 0;
          return;
        }
      }
      dietDetailParam[e.target.name] = e.target.value;
      setDietDetailParam({ ...dietDetailParam });
    },
    [dietDetailParam]
  );

  // const handleImageChange = (e) => {
  //   console.log("DietCreateComponent.js handleImageChange()진입");
  //   if (!e.target.files) return;
  //   const file = e.target.files[0];
  //   if (file) {
  //     let image = window.URL.createObjectURL(file);
  //     setImage(image);
  //   }

  //   setVisible(true);
  // };

  const handleDetailOnClick = () => {
    //refDetailText.current = dietDetailParam.content + dietDetailParam.quantity;

    if (dietDetailParam.content === "" || dietDetailParam.quantity === 0) {
      alert("내용을 모두 입력해주세요!");
      return;
    }

    const compound = dietDetailParam.content + dietDetailParam.quantity;
    // dietDetailFinalArray.forEach((i) =>
    //   console.log("dietDetailFinalArray -> ", i)
    // );
    // const sameResult = dietDetailFinalArray.filter((i) => i === compound);
    // console.log("handleDetailOnclick sameResult-> ", sameResult);
    // if (sameResult.length !== 0) {
    //   alert("이미 식단에 추가했습니다!");
    //   setDietDetailParam({ ...initDetailState });

    //   return;
    // }

    setFinalObjectArray([
      ...finalObjectArray,
      { content: dietDetailParam.content, quantity: dietDetailParam.quantity },
    ]);

    //    console.log("handleDetailOnclick -> ", compound);
    console.log("typeof -> ", typeof compound);
    setdietDetailFinalArray((dietDetailFinalArray) => [
      ...dietDetailFinalArray,
      compound,
    ]);
    setDietDetailParam({ ...initDetailState });
    setDetailVisible(true);
  };

  const handleSubmitDiet = (e) => {
    e.preventDefault();

    console.log(
      "handleSubmitDiet() 내 e.target.choose.value-> ",
      e.target.choose.value
    );
    if (!e.target.choose.value) {
      alert("시간을 선택해주세요!");
      return;
    }
    setInputVisible(false);

    // console.log("refQuantity.current -> ", refQuantity.current);
    dietParam["choose"] = e.target.choose.value;
    dietParam["email"] = loginState;
    dietParam["dateobject"] = dateobject;

    if (dietDetailFinalArray.length === 0) {
      alert("식단내용을 입력해주세요!");
      setInputVisible(true);
      return;
    }

    //initState -> content, quantity, email, choose,dataobject
    //initDetailState -> content, quantity

    const dietDetailFinalObject = dietDetailFinalArray.join(" ");
    console.log(
      "DietCreateComponent.js dietDetailFinalObject 문자열로 만듬 -> ",
      dietDetailFinalObject
    );
    dietParam["quantity"] = 0;
    //해당컬럼삭제시킴    dietParam["content"] = dietDetailFinalObject;
    setDietParam({ ...dietParam });
    console.log("DietCreateComponent.js handleSubmitDiet -> ", dietParam);

    console.log(
      "DietCreateComponent.js finalObjectArray -> ",
      finalObjectArray
    );

    postDietC({ dietParam, finalObjectArray })
      .then((result) => {
        console.log(
          "DietCreateComponent.js axios postDiet then() 진입 -> ",
          result
        );
        if (result.payload.result === "success") {
          alert(dateobject + " 일자 식단 등록했습니다.!");
          // if (result.payload.image) {
          //   URL.revokeObjectURL(image);
          //   setImage("");
          // }
          moveToDietList();
        }
        if (result.payload.error) {
          console.log("result.payload.error -> ", result.payload.error);
          alert(dateobject + " 일자 식단 등록 실패했습니다.");
          moveToDietCreate(dateobject);
        }
      })
      .catch((err) => {
        console.log("DietCreateComponent.js axios postDietC catch()", err);
        alert(dateobject + "일자 식단 등록 실패했습니다.");
        moveToDietCreate(dateobject);
      });
  };

  const navigate = useNavigate();

  useLayoutEffect(() => {
    const getChooseDietEI = async () => {
      await getChooseDiet(dateobject)
        .then((result) => {
          console.log(
            "DietCreateComponent.js useLayoutEffect() axios 결과 then() -> ",
            result
          );
          if (result.result.length !== 0) {
            console.log(
              "DietCreateComponent.js useLayoutEffect() axios 결과 숫자존재할경우진입 "
            );

            if (result.result.length === 4) {
              alert(
                dateobject +
                  " 일자의 모든 식단을 작성했습니다! 식단달력으로 이동합니다."
              );
              moveToDietList();
            }

            let numberchoose = "";
            result.result.forEach((r) => {
              numberchoose += r.choose;
            });
            console.log("useLayoutEffect() numberchoose => ", numberchoose); //예 "1234"
            setChooseResult(() => chooseReturn(numberchoose)); //아침점심저녁.. 출력
            setChooseCheckArray(() => chooseCheckbox(numberchoose)); //["1","2",,,] 출력
            setVisible(true);
          } else {
            setVisible(false);
          }
        })
        .catch((err) => {
          console.log(
            "DietCreateComponent.js useEffect() axios 결과 catch() -> ",
            err
          );
          exceptionHandle(err);
        });
    };
    getChooseDietEI();
    return () => {
      setVisible(false);
      setChooseCheckArray(() => []);
      setChooseResult(() => "");
    };
  }, []);

  useEffect(() => {
    if (chooseCheckArray.length !== 0) {
      chooseCheckArray.forEach((c) => {
        console.log("useEffect() 라디오버튼 checked 진입 ", c);

        if (c === "1") {
          radiofirst.current.disabled = true;
        }
        if (c === "2") {
          radiosecond.current.disabled = true;
        }
        if (c === "3") {
          radiothird.current.disabled = true;
        }
        if (c === "4") {
          radiofourth.current.disabled = true;
        }
      });
    } //forEach
  }, [chooseCheckArray]);

  const handleDetailRemoveOnClick = (e) => {
    // console.log(
    //   "handleDetailRemoveOnClick() dataset =>",
    //   e.target.dataset.finalcontent,
    //   "e.target.dataset.finalquantity -> ",
    //   e.target.dataset.finalquantity
    // );
    const finalcontent = e.target.dataset.finalcontent;
    const finalquantity = e.target.dataset.finalquantity;
    console.log("handleDetailRemoveOnClick() 진입");
    // const newProduce = produce(dietDetailFinalArray, (draft) => {
    //   draft.filter((d) => d !== finalcontent);
    // });

    // const newProduce = dietDetailFinalArray.filter(
    //   (i) => i !== `${finalcontent}${finalquantity}`
    // );
    // console.log("handleDetailRemoveOnClick() newProduce =>", newProduce);
    // setdietDetailFinalArray(prev => [...prev, newProduce]);

    const indexNumber = finalObjectArray.findIndex(
      (i) => i.content === finalcontent && i.quantity === finalquantity
    );

    if (indexNumber === 0 && finalObjectArray.length === 1) {
      setFinalObjectArray([]);
    } else {
      const filterExpense = finalObjectArray.filter(
        //싹다지워진다.
        (e) => !(e.content === finalcontent && e.quantity === finalquantity)
      );
      setFinalObjectArray(filterExpense);
    }
  };

  return (
    <div className="container">
      <br />
      <br />

      <h4>식단작성</h4>
      <hr />
      <br />
      {visible ? (
        <h5>
          😅 {dateobject} 일자에 {chooseResult}식단은 작성되어 있습니다!
        </h5>
      ) : (
        <h5>😅 {dateobject} 일자에 처음 작성하는 식단입니다. </h5>
      )}
      <br />

      <Form onSubmit={handleSubmitDiet}>
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
        {/* <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>사진등록</Form.Label>
            <Form.Control
              type="file"
              name="picture"
              onChange={handleImageChange}
            />
            {visible && (
              <>
                <br />
                <Image src={image} rounded />
              </>
            )}
          </Form.Group> */}
        <Form.Group className="mb-3">
          <Form.Label>시간선택</Form.Label>

          <div key={`inline-radio`} className="mb-3">
            {chooseCheckArray.length !== 0 && (
              <>
                &nbsp;
                <Image
                  src="/img/cabbage.png"
                  style={{ height: "20px", width: "20px" }}
                />
                <Form.Check
                  inline
                  label="아침"
                  name="choose"
                  type={"radio"}
                  value={1}
                  onChange={handleChange}
                  ref={radiofirst}
                />
                &nbsp;
                <Image
                  src="/img/carrot.png"
                  style={{ height: "20px", width: "20px" }}
                />
                <Form.Check
                  inline
                  label="점심"
                  name="choose"
                  type={"radio"}
                  value={2}
                  onChange={handleChange}
                  ref={radiosecond}
                />
                &nbsp;
                <Image
                  src="/img/eggplant.png"
                  style={{ height: "20px", width: "20px" }}
                />
                <Form.Check
                  inline
                  label="저녁"
                  name="choose"
                  type={"radio"}
                  value={3}
                  onChange={handleChange}
                  ref={radiothird}
                />
                &nbsp;
                <Image
                  src="/img/tomato.png"
                  style={{ height: "20px", width: "20px" }}
                />
                <Form.Check
                  inline
                  label="간식"
                  name="choose"
                  type={"radio"}
                  value={4}
                  onChange={handleChange}
                  ref={radiofourth}
                />
              </>
            )}

            {chooseCheckArray.length === 0 && (
              <>
                &nbsp;
                <Image
                  src="/img/cabbage.png"
                  style={{ height: "20px", width: "20px" }}
                />
                <Form.Check
                  inline
                  label="아침"
                  name="choose"
                  type={"radio"}
                  value={1}
                  onChange={handleChange}
                />
                &nbsp;
                <Image
                  src="/img/carrot.png"
                  style={{ height: "20px", width: "20px" }}
                />
                <Form.Check
                  inline
                  label="점심"
                  name="choose"
                  type={"radio"}
                  value={2}
                  onChange={handleChange}
                />
                &nbsp;
                <Image
                  src="/img/eggplant.png"
                  style={{ height: "20px", width: "20px" }}
                />
                <Form.Check
                  inline
                  label="저녁"
                  name="choose"
                  type={"radio"}
                  value={3}
                  onChange={handleChange}
                />
                &nbsp;
                <Image
                  src="/img/tomato.png"
                  style={{ height: "20px", width: "20px" }}
                />
                <Form.Check
                  inline
                  label="간식"
                  name="choose"
                  type={"radio"}
                  value={4}
                  onChange={handleChange}
                />
              </>
            )}
          </div>
        </Form.Group>
        <br />
        {/* <Button
          variant="outline-warning"
          type="button"
          onClick={handleDetailOnClick}
        >
          식단내용 추가(내용과 양을 입력하고 이 버튼을 클릭해주세요!)
        </Button> */}
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
                value={dietDetailParam.content}
                onChange={handleDetailChange}
              />
              <InputGroup.Text>양(단위 g/ml)&nbsp;&nbsp;</InputGroup.Text>
              <Form.Control
                type="text"
                name="quantity"
                value={dietDetailParam.quantity}
                onChange={handleDetailChange}
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
        {/* <Form.Group className="mb-3">
          <Form.Label>내용</Form.Label>
          <Form.Control
            type="text"
            name="content"
            value={dietDetailParam.content}
            onChange={handleChange}
            required
          />
        </Form.Group> */}
        {/* <Form.Group className="mb-3">
          <Form.Label>양(단위 g/ml)</Form.Label>
          <Form.Control
            type="text"
            name="quantity"
            value={dietDetailParam.quantity}
            onChange={handleChange}
            ref={refQuantity}
            required
          />
        </Form.Group> */}
        {/* <Form.Group className="mb-3" >
           <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>  */}
        <Button variant="outline-primary" type="submit">
          식단 등록
        </Button>
        &nbsp;
        <Link to={`../list`}>
          <Button variant="outline-secondary" type="button">
            식단달력이동
          </Button>
        </Link>
        &nbsp;
        <Link to={`/`}>
          <Button variant="outline-success" type="button">
            메인으로
          </Button>
        </Link>
        <br />
        <br />
      </Form>
    </div>
  );
};

export default DietCreateComponent;
