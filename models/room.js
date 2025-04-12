const Sequelize = require("sequelize");

class Room extends Sequelize.Model {
  static initiate(sequelize) {
    Room.init(
      {
        // max: {
        //   type: Sequelize.INTEGER,
        //   allowNull: false,
        // },
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        roomnumber: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        owner: {
          type: Sequelize.STRING(100),
          allowNull: false,
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
        modelName: "Room",
        tablename: "rooms",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    // db.Room.belongsTo(db.Chat, { foreignKey: "RoomId", targetKey: "id" });
    //   db.Room.hasMany(db.Dietdetail, {
    //     sourceKey: "id",
    //   });
  }
}

module.exports = Room;
