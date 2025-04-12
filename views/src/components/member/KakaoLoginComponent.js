import { Link } from "react-router-dom";
import { getKakaoLoginLink } from "../../api/kakaoApi";

const KakaoLoginComponent = () => {
  const link = getKakaoLoginLink(); //인가코드받을주소

  return (
    <div className="flex flex-col">
      {/* <div className="text-center text-blue-500">
        로그인시에 자동 가입처리 됩니다
      </div> */}
      <div className="flex   w-full">
        {/* justify-center */}
        {/* text-center */}
        <br />
        <br />
        <h5>
          <Link to={link}>
            카카오아이디를 이용한 회원가입을 원하시면 여기를 클릭해주세요!
          </Link>
        </h5>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default KakaoLoginComponent;
