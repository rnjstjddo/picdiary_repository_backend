import React, { useCallback, useEffect, useState } from "react";
import useCustomDiet from "../../hooks/useCustomDiet";
import useCustomLogin from "../../hooks/useCustomLogin";
import { Link, Navigate, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { deleteDiet, getDietEach } from "../../api/dietApi";
import useCustomMove from "../../hooks/useCustomMove";

const chooseSwitch = (choose) => {
  switch (choose) {
    case 1:
      return "아침";
    case 2:
      return "점심";
    case 3:
      return "저녁";
    case 4:
      return "간식";
    default:
      return "아침";
  }
};

const initState = {
  content: "",
  //picture: "",
  dateobject: "",
  updatedAt: "",
  id: "",
  quantity: 0,
  choose: "",
};

const DietReadComponent = () => {
  const [dietParam, setDietParam] = useState([]);
  const [dietChoose, setDietChoose] = useState("");

  const [dietId, setDietId] = useState("");
  const { choose, dateobject } = useParams();

  const { isLogin } = useCustomLogin();
  const { moveToLogin } = useCustomMove();
  const {
    postDietC,
    moveToDietRead,
    moveToDietCreate,
    deleteDietC,
    moveToDietList,
  } = useCustomDiet();

  useEffect(() => {
    //console.log("useEffect isLogin -> ", isLogin);
    if (!isLogin) {
      alert("로그인이 필요합니다.");

      return moveToLogin();
    }
    //api
    const getDietEI = async () =>
      await getDietEach({ choose, dateobject })
        .then((result) => {
          // console.log(
          //   "DietReadComponent.js useEffect 내 getDietEach axios 호출후 then() => ",
          //   result
          // );

          setDietParam(() => result);
          setDietId(() => result[0].DietId);
          setDietChoose(() => result[0].choose);
          // console.log(
          //   "DietReadComponent.js useEffect 내 getDietEach axios 호출후 dietParam => ",
          //   dietParam
          // );
        })
        .catch((err) => {
          // console.log(
          //   "DietReadComponent.js useEffect 내 getDietEach axios 호출후 catch() => ",
          //   err
          // );
        });

    getDietEI();
  }, []);

  const deleteOnClick = () => {
    //console.log("DietReadComponent.js deleteOnClick() 진입 ");

    if (window.confirm("해당 식단을 삭제하십니까?")) {
      deleteDiet({ choose, dateobject })
        .then((result) => {
          // console.log(
          //   "DietReadComponent.js deleteOnClick() then() => ",
          //   result
          // );
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
          //console.log("DietReadComponent.js deleteOnClick() catch() => ", err);
          alert(dateobject + "일자의 식단 삭제를 실패했습니다.");
          moveToDietRead({ dateobject, choose });
        });
    } //window.confirm
  };

  return (
    <div className="container">
      <br />
      <br />

      <h4>식단조회</h4>
      <hr />
      <br />
      {dietParam && dietParam.length !== 0 && (
        <React.Fragment>
          <Form>
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
            <Form.Group className="mb-3">
              <Form.Label>시간</Form.Label>
              <Form.Control
                type="text"
                name="content"
                value={chooseSwitch(choose)}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>식단내용 / 양(단위 g/ml)</Form.Label>
              {dietParam.map((d, index) => (
                <Form.Control
                  key={d.id}
                  type="text"
                  name="content"
                  value={`${d.content}${d.quantity}`}
                  disabled
                />
              ))}
            </Form.Group>
            <br />
            <Link to={`../modify/${dateobject}/${dietChoose}`}>
              <Button variant="outline-primary">식단 수정이동</Button>
            </Link>
            &nbsp;
            <Button
              variant="outline-danger"
              type="button"
              onClick={() => deleteOnClick()}
            >
              삭제하기
            </Button>
            &nbsp;
            <Link to={`../`}>
              <Button variant="outline-secondary">식단 달력이동</Button>
            </Link>
          </Form>
        </React.Fragment>
      )}
      <br />
    </div>
  );
};

export default DietReadComponent;
