import { useCallback, useEffect, useState } from "react";
import useCustomDiary from "../../hooks/useCustomDiary";
import useCustomLogin from "../../hooks/useCustomLogin";
import { Link, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getDiary } from "../../api/diaryApi";

const initState = {
  content: "",
  picture: "",
  dateobject: "",
  updatedAt: "",
  id: "",
};

const DiaryReadComponent = () => {
  const [diaryParam, setDiaryParam] = useState({ ...initState });

  const { id } = useParams();
  const {
    postDiaryC,
    moveToDiaryRead,
    moveToDiaryCreate,
    deleteDiaryC,
    moveToDiaryList,
  } = useCustomDiary();

  useEffect(() => {
    console.log("DiaryReadComponent.js useEffect() 진입 id=> ", id);

    //api
    const getDiaryEI = async () =>
      await getDiary(id)
        .then((result) => {
          // console.log(
          //   "DiaryReadComponent.js useEffect 내 getDiary axios 호출후 then() => ",
          //   result
          // );
          setDiaryParam({ ...result.data });
        })
        .catch((err) => {
          console.log(
            "DiaryReadComponent.js useEffect 내 getDiary axios 호출후 catch() => ",
            err
          );
        });

    getDiaryEI();
  }, []);

  const deleteOnClick = () => {
    if (window.confirm("해당 다이어리를 삭제하십니까?")) {
      deleteDiaryC(diaryParam.id)
        .then((result) => {
          console.log(
            "DiaryReadComponent.js deleteOnClick() then() => ",
            result
          );
          if (result.payload.result === "success") {
            alert(diaryParam.dateobject + "일자의 다이어리가 삭제되었습니다.");

            moveToDiaryList();
          }
          if (result.payload.error === "error") {
            alert(
              diaryParam.dateobject + "일자의 다이어리 삭제를 실패했습니다."
            );
            moveToDiaryRead(diaryParam.id);
          }
        })
        .catch((err) => {
          console.log("DiaryReadComponent.js deleteOnClick() catch() => ", err);
          alert(diaryParam.dateobject + "일자의 다이어리 삭제를 실패했습니다.");
          moveToDiaryRead(diaryParam.id);
        });
    } //window.confirm
  };

  return (
    <div className="container">
      <br />
      <br />

      <h4>다이어리조회</h4>
      <hr />
      <br />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>다이어리일자</Form.Label>
          <Form.Control
            type="text"
            name="dateobject"
            value={diaryParam.dateobject}
            disabled
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>일기내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="content"
            value={diaryParam.content}
            disabled
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>사진</Form.Label>
          <br />
          {diaryParam.picture ? (
            <Image
              //src={`http://localhost:8001/img/${diaryParam.picture}`}
              src={`https://picdiary-bucket.s3.ap-northeast-2.amazonaws.com/${diaryParam.path}`}
              rounded
            />
          ) : (
            <>업로드하지 않음😅</>
          )}
          {/* <Form.Control type="file" name="picture" /> */}
        </Form.Group>
        <br />
        <br />
        <Link to={`../modify/${diaryParam.id}`}>
          <Button variant="outline-primary">다이어리 수정이동</Button>
        </Link>
        &nbsp;&nbsp;
        <Button variant="outline-danger" type="button" onClick={deleteOnClick}>
          삭제하기
        </Button>
        &nbsp;&nbsp;
        <Link to={`../`}>
          <Button variant="outline-secondary">다이어리 달력이동</Button>
        </Link>
        <br />
        <br />
      </Form>
    </div>
  );
};

export default DiaryReadComponent;
