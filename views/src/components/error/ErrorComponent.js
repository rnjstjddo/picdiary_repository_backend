import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <div className="container">
      <br />
      <br />
      <Image
        src="/img/smile.png"
        style={{ width: "30px", height: "30px" }}
        rounded
      />
      <Button variant="warning">
        <Link to={"../login"} style={{ textDecoration: "none" }}>
          해당 페이지가 존재하지 않거나 로그인이 필요합니다!
        </Link>
      </Button>
      <br />
      <br />
    </div>
  );
};

export default ErrorComponent;
