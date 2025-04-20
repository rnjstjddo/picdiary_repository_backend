import { useCallback, useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";

import Image from "react-bootstrap/Image";
import useCustomDiary from "../../hooks/useCustomDiary";
import { getDiary } from "../../api/diaryApi";
import useCustomLogin from "../../hooks/useCustomLogin";
import { removeCookie } from "../../util/cookieUtil";
const initState = {
  content: "",
  picture: "",
  dateobject: "",
  updatedAt: "",
  id: "",
};
const DiaryModifyComponent = () => {
  const [diaryParam, setDiaryParam] = useState({ ...initState });
  const { id } = useParams();
  const {
    postDiaryC,
    moveToDiaryRead,
    moveToDiaryCreate,
    patchDiaryC,
    moveToDiaryModify,
    deleteDiaryC,
    moveToDiaryList,
  } = useCustomDiary();
  const { moveToLogin, effectException, exceptionHandle } = useCustomLogin();

  //이미지보이기
  const [visible, setVisible] = useState(true);
  const [newvisible, setNewvisible] = useState(false);
  const [image, setImage] = useState("");

  const [reset, setReset] = useState(false);
  const navigate = useNavigate();

  const refImage = useRef();

  const handleChange = useCallback(
    (e) => {
      //console.log(e.target.value, e.target.name);
      //console.log("e.target.file 값확인 -> ", e.target.file);

      if (e.target.file) {
        //console.log("e.target.file if문 들어옴");
        setVisible(false);
        setNewvisible(true);
      }

      diaryParam[e.target.name] = e.target.value;
      setDiaryParam({ ...diaryParam });
    },
    [diaryParam, setVisible]
  );

  const handleImageChange = (e) => {
    //console.log("DiaryReadComponent.js handleImageChange()진입");
    if (!e.target.files) return;
    const file = e.target.files[0];
    // console.log(
    //   "DiaryReadComponent.js handleImageChange()진입 e.target.files[0] -> ",
    //   file
    // );
    // console.log(
    //   "DiaryReadComponent.js handleImageChange()진입 e.target -> ",
    //   e.target
    // );

    if (file.name !== null) {
      let image = window.URL.createObjectURL(file);
      setImage(image);
    }
    setVisible(false);
    setNewvisible(true);
  };

  useEffect(() => {
    //console.log("DiaryReadComponent.js useEffect() 진입 id=> ", id);

    //api
    const getDiaryEI = async () =>
      await getDiary(id)
        .then((result) => {
          // console.log(
          //   "DiaryReadComponent.js useEffect 내 getDiary axios 호출후 then() => ",
          //   result.data
          // );
          setDiaryParam({ ...result.data });
        })
        .catch((err) => {
          // console.log(
          //   "DiaryReadComponent.js useEffect 내 getDiary axios 호출후 catch() 진입 ",
          //   err
          // );
          effectException(err);
        });

    getDiaryEI();
  }, [reset]);

  const handleSubmitDiaryModify = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      e.preventDefault();
      return;
    }
    if (window.confirm("해당 다이어리를 수정하십니까?")) {
      diaryParam[e.target.content.name] = e.target.content.value;

      setDiaryParam({ ...diaryParam });

      const { picture } = e.target;
      patchDiaryC({ diaryParam, picture })
        .then((result) => {
          // console.log(
          //   "DiaryModifyComponent.js axios patchDiaryC then() 진입 -> ",
          //   result
          // );
          if (result.payload.result === "success") {
            alert(diaryParam.dateobject + " 일자 다이어리 수정했습니다.!");
            if (result.payload.image) {
              URL.revokeObjectURL(image);
              setImage("");
              setNewvisible(false);
              setVisible(true);
            }
            moveToDiaryRead(diaryParam.id);
          }
          if (result.payload.error) {
            //console.log("result.payload.error -> ", result.payload.error);
            alert(diaryParam.dateobject + " 일자 다이어리 수정 실패했습니다.");
            moveToDiaryModify(diaryParam.id);
          }
        })
        .catch((err) => {
          //console.log("DiaryCreateComponent.js axios postDiary catch()", err);
          alert(diaryParam.dateobject + "일자 다이어리 수정 실패했습니다.");
          moveToDiaryModify(diaryParam.id);
        });
    } //window.confirm
  };

  const resetOnClick = () => {
    setReset((reset) => !reset);
    //console.log(image); //blob
    if (image) {
      setImage("");
      URL.revokeObjectURL(image);
      setNewvisible(false);
    }
    //console.log(diaryParam.picture); //null
    if (diaryParam.picture) {
      setVisible(true);
    }
    refImage.current.value = "";
  };

  const deleteOnClick = () => {
    if (window.confirm("해당 다이어리를 삭제하십니까?")) {
      deleteDiaryC(diaryParam.id)
        .then((result) => {
          // console.log(
          //   "DiaryModifyComponent.js deleteOnClick() then() => ",
          //   result
          // );
          if (result.payload.result === "success") {
            alert(diaryParam.dateobject + "일자의 다이어리가 삭제되었습니다.");
            URL.revokeObjectURL(image);

            moveToDiaryList();
          }
          if (result.payload.error === "error") {
            alert(
              diaryParam.dateobject + "일자의 다이어리 삭제를 실패했습니다."
            );
            moveToDiaryModify(diaryParam.id);
          }
        })
        .catch((err) => {
          //console.log(
          //  "DiaryModifyComponent.js deleteOnClick() catch() => ",
          //  err
          //);
          alert(diaryParam.dateobject + "일자의 다이어리 삭제를 실패했습니다.");
          moveToDiaryModify(diaryParam.id);
        });
    } //window.confirm
  };

  return (
    <div className="container">
      <br />
      <br />

      <h4>다이어리수정</h4>
      <hr />
      <br />
      <Form onSubmit={handleSubmitDiaryModify}>
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
        <br />
        <Form.Group className="mb-3">
          <Form.Label>일기내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="content"
            value={diaryParam.content}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>
            사진변경{" "}
            <span style={{ color: "crimson" }}>
              (새로운 사진을 선택하면 기존 사진은 삭제됩니다. 변경시에만
              파일선택을 클릭해주세요!)
            </span>
          </Form.Label>
          <Form.Control
            type="file"
            name="picture"
            onChange={handleImageChange}
            ref={refImage}
          />
          {setNewvisible && (
            <>
              <br />
              <Image src={image} rounded />
            </>
          )}
          <br />
          {visible && diaryParam.picture ? (
            <>
              {" "}
              <Image
                //src={`http://localhost:8001/img/${diaryParam.picture}`}
                src={`https://picdiary-bucket.s3.ap-northeast-2.amazonaws.com/${diaryParam.path}`}
                rounded
              />
            </>
          ) : (
            <></>
          )}
          {/* <Form.Control type="file" name="picture" /> */}
        </Form.Group>
        <br />
        <br />
        <Button variant="outline-primary" type="submit">
          위와 같이 다이어리 수정
        </Button>
        &nbsp;&nbsp;
        <Button
          variant="outline-danger"
          type="button"
          onClick={() => deleteOnClick()}
        >
          삭제하기
        </Button>
        &nbsp;&nbsp;
        <Button
          variant="outline-secondary"
          type="button"
          onClick={() => resetOnClick()}
        >
          기존 다이어리글 되돌리기
        </Button>
        &nbsp;&nbsp;
        <Link to={"../list"}>
          <Button variant="outline-success" type="button">
            다이어리달력이동
          </Button>
        </Link>
        <br />
        <br />
      </Form>
    </div>
  );
};

export default DiaryModifyComponent;
