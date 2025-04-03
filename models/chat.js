const Sequelize = require("sequelize");

class Chat extends Sequelize.Model {
  static initiate(sequelize) {
    Chat.init(
      {
        // max: {
        //   type: Sequelize.INTEGER,
        //   allowNull: false,
        // },
        chat: {
          type: Sequelize.STRING(1000),
          allowNull: false,
        },
        user: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        // dateobject: {
        //   type: Sequelize.STRING(12),
        //   allowNull: false,
        // },
      },
      {
        sequelize,
        timestamps: "true",
        paranoid: "true",
        modelName: "Chat",
        tablename: "chats",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // db.Chat.hasOne(db.Room, { foreignKey: "RoomId", sourceKey: "id" });
  }
}

module.exports = Chat;
