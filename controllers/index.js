const { User } = require("../models");

exports.renderMain = (req, res, next) => {
  res.send({ message: "안녕" });
};

exports.renderJoin = (req, res) => {
  res.render("join", {
    title: "picdiary 회원가입",
  });
};
