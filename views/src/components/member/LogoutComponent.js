import useCustomLogin from "../../hooks/useCustomLogin";
import Button from "react-bootstrap/Button";

const LogoutComponent = () => {
  //  const dispatch = useDispatch();

  const { doLogout, moveToPath } = useCustomLogin();

  const handleClickLogout = () => {
    //    dispatch(logout());
    //커스텀훅사용
    //console.log("LogoutComponent.js handleClickLogout() 진입");

    doLogout()
      .then((result) => {
        //console.log("LogoutComponent.js 로그아웃 결과 -> ", result);

        alert("로그아웃성공");
        moveToPath("/");
      })
      .catch((err) => {
        //console.log("LogoutComponent.js 로그아웃 에러 발생 ", err);
        moveToPath("/");
      });

    // const doLogoutF = async () => {
    //   await doLogout()
    //     .then((result) => {
    //       console.log(
    //         "LogoutComponent.js handleClickLogout() 내에 doLogout() 호출후 then() 진입 결과 -> ",
    //         result
    //       );

    //       if (result === "success") {
    //         alert("로그아웃성공");
    //         moveToPath("/");
    //       } else {
    //         console.log("LogoutComponent.js 로그아웃실패");
    //         moveToPath("/");
    //       }
    //     })
    //     .catch((err) => {
    //       console.log("LogoutComponent.js 로그아웃 에러 발생 ", err);
    //       moveToPath("/");
    //     });
    // }; //doLogoutF
    // doLogoutF();
  };

  return (
    <div className="container">
      <br />
      <br />

      <h4>로그아웃</h4>
      <hr />
      <br />

      <Button
        variant="primary"
        type="button"
        onClick={() => handleClickLogout()}
      >
        로그아웃
      </Button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default LogoutComponent;
