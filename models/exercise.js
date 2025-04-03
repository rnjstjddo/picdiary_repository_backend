const Sequelize = require("sequelize");

//Exercise - minute, choose,content
class Exercise extends Sequelize.Model {
  static initiate(sequelize) {
    Exercise.init(
      {
        minute: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        choose: {
          type: Sequelize.STRING(2),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(300),
          allowNull: true,
        },
        dateobject: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
        whenchoose: {
          type: Sequelize.STRING(2),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: "true",
        paranoid: "true",
        modelName: "Exercise",
        tablename: "exercises",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Exercise.belongsTo(db.User, { targetKey: "email" });
  }
}

module.exports = Exercise;
