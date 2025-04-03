const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const User = require("./user");
const Exercise = require("./exercise");
const Diary = require("./diary");
const Diet = require("./diet");
const Money = require("./money");
const Moneydetail = require("./moneydetail");
const Room = require("./room");
const Chat = require("./chat");

const Dietdetail = require("./dietdetail");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.User = User;
db.Exercise = Exercise;
db.Money = Money;
db.Diet = Diet;
db.Diary = Diary;
db.Dietdetail = Dietdetail;
db.Moneydetail = Moneydetail;
db.Room = Room;
//db.Chat = Chat;

User.initiate(sequelize);
Exercise.initiate(sequelize);
Diet.initiate(sequelize);
Diary.initiate(sequelize);
Money.initiate(sequelize);
Dietdetail.initiate(sequelize);
Moneydetail.initiate(sequelize);
//Chat.initiate(sequelize);
Room.initiate(sequelize);

User.associate(db);
Exercise.associate(db);
Diet.associate(db);
Diary.associate(db);
Money.associate(db);
Dietdetail.associate(db);
Moneydetail.associate(db);
Room.associate(db);
//Chat.associate(db);

// const basename = path.basename(__filename);
// fs.readdirSync(__dirname)
//   .filter((f) => {
//     return f.indexOf(".") !== 0 && f !== basename && f.slice(-3) === ".js";
//   })
//   .forEach((f) => {
//     const model = require(path.join(__dirname, f));
//     db[model.name] = model;
//     model.initiate(sequelize);
//   });

// Object.keys(db).forEach((m) => {
//   if (db[m].associate) {
//     db[m].associate(db);
//   }
// });

module.exports = db;
