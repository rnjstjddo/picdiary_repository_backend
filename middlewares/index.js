const jwt = require("jsonwebtoken");
const { createToken } = require("../controllers/memberController");

exports.verifyToken = (req, res, next) => {
  let accessToken = req.headers.authorization;
  console.log(
    "middlewares.js verifyToken 함수 진입 req헤더포함된 엑세스토큰확인 ",
    accessToken
  );

  accessToken = accessToken.replace("Bearer ", "");
  console.log(
    "middlewares.js verifyToken 함수 진입 req헤더포함된 엑세스토큰확인 수정 ",
    accessToken
  );
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    console.log(
      "middlewares/index.js verifyToken() 진입 verify결과-> ",
      decoded.email
    );

    res.locals.jwtemail = decoded.email;

    const now = Math.floor(Date.now() / 1000);

    //엑세스토큰 재발급
    if (decoded.exp - now < 60 * 60) {
      console.log(
        "middlewares/index.js verifyToken() 진입 엑세스토큰 1시간 이하로 남을경우 진입 419 상태코드보냄"
      );

      return res.status(419).json({ code: 419, error: "EXPIRED_ACCESS_TOKEN" });
    } else {
      next();
    } //시간확인
  } catch (error) {
    if (error) {
      console.log("middlewares/index.js verifyToken 에러발생  ", err); //JsonWebTokenError: invalid token
      return res.status(401).json({
        code: 401,
        //message: "유효하지않는 토큰입니다.",
        error: "ERROR_ACCESS_TOKEN",
      });
    }
  } //catch
};

exports.isLoggedIn = (req, res, next) => {
  console.log("미들웨어 isLoggedIn 진입");
  console.log("req.session", req.session);
  console.log("req.user", req.user);
  console.log("req.isAuthenticated()", req.isAuthenticated());
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send("로그인필요");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent("로그인한 상태");
    res.redirect(`/?error=${message}`);
  }
};
