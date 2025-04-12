const Sequelize = require("sequelize");

class Diary extends Sequelize.Model {
  static initiate(sequelize) {
    Diary.init(
      {
        content: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        picture: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        path: {
          type: Sequelize.STRING(500),
          allowNull: true,
        },
        dateobject: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: "true",
        paranoid: "true",
        modelName: "Diary",
        tablename: "diarys",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Diary.belongsTo(db.User, { targetKey: "email" });
  }
}

module.exports = Diary;
