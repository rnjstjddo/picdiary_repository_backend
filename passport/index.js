const passport = require("passport");
const local = require("./localStrategy");
const User = require("../models/user");

module.exports = () => {
  // passport.serializeUser((user, done) => {
  //   //req.login이 user담아서 호출 세션쿠키만들어 응답함
  //   // console.log(
  //   //   "passport index.js serializeUser() 진입 매개변수 user-> ",
  //   //   user
  //   // );

  //   done(null, user.id);
  // });

  // passport.deserializeUser((id, done) => {
  //   console.log("passport index.js deserializeUser() 진입 매개변수 id-> ", id);
  //   User.findOne({ where: { id } }).then((user) => {
  //     console.log(
  //       "passport index.js deserializeUser() 진입 db존재하는 회원 이제 라우터로 이동"
  //     );
  //     done(null, user);
  //   }); //req.user 담김
  //   console
  //     .log("passport index.js deserializeUser() 진입 db존재하지 않은 회원")
  //     .catch((err) => {
  //       console.log("passport index.js deserializeUser() 진입 에러 ", err);
  //       done(err);
  //     });
  // }); // 라우터전 passport.session 호출
  local();
};
