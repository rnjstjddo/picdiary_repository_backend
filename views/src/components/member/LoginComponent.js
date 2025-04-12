import { useCallback, useState } from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import KakaoLoginComponent from "./KakaoLoginComponent";
import useCustomLogin from "../../hooks/useCustomLogin";
import axios from "axios";

const initState = {
  email: "",
  pw: "",
};

const LoginComponent = () => {
  const [loginParam, setLoginParam] = useState({ ...initState });

  //useCustomLogin 사용
  // const dispatch = useDispatch();

  // const navigate = useNavigate();

  const { moveToPath, doLogin, forSession } = useCustomLogin();

  const handleChange = useCallback(
    (e) => {
      loginParam[e.target.name] = e.target.value;
      setLoginParam({ ...loginParam });
    },
    [loginParam]
  );

  const handleSubmitLogin = (e) => {
    console.log("LoginComponent.js handleSubmitLogin() 진입");
    e.preventDefault();

    //비동기안될경우
    // axios
    //   .post("http://localhost:8001/api/member/login", {
    //     email: loginParam.email,
    //     password: loginParam.pw,
    //   })
    //   .then((result) =>
    //     console.log("로그인 axios post then() 결과 -> ", result.data)
    //   )
    //   .catch((err) => console.log("로그인 axios post catch()결과 ", err));
    // moveToPath("/");

    doLogin(loginParam)
      .then((data) => {
        console.log(
          "LoginComponent.js handleClickLogin() loginPostAsync 결과 ",
          data
        );

        if (data.error) {
          alert("일치하는 정보가 없거나 회원가입을 해주세요!");
          console.log("data.error => ", data.error);
          moveToPath("/login");
        } else {
          moveToPath("/");
        }
      })
      .catch((err) => {
        console.log("LoginComponent.js thunk함수 실행결과 catch() 진입 ", err);
        alert("다시 로그인 해주세요!");
        moveToPath("/login");
      });
  };

  return (
    <div className="container">
      <br />
      <br />

      <h4>로그인</h4>
      <hr />
      <br />
      <Form onSubmit={handleSubmitLogin}>
        <Form.Group className="mb-3">
          <Form.Label>이메일주소</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={loginParam.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>패스워드</Form.Label>
          <Form.Control
            type="password"
            name="pw"
            value={loginParam.pw}
            onChange={handleChange}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" >
       <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>  */}

        <Button variant="primary" type="submit">
          로그인
        </Button>
      </Form>
      {/* <KakaoLoginComponent /> */}
      <br />
      <br />
    </div>
  );
};

export default LoginComponent;
