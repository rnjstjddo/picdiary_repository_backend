const Room = require("../models/room");
const { chatRemove } = require("../services/chatService");

exports.chatList = async (req, res, next) => {
  try {
    const room = await Room.findAll({});
    if (room.size === 0) {
      res.json({ error: "채팅방이 없습니다." });
    }
    console.log("chatController.js chatList() findAll() ", room);
    return res.json({ message: "success", room });
  } catch (err) {
    console.log("chatController.js chatList() findAll() catch() ", err);
  }
};

// exports.chatGetPost = async (req, res, next) => {
//   const { chatroomname } = req.params;
//   const { chatroompassword } = req.body;
//   console.log(
//     "chatController.js chatAdd() req.body chatroomname =>  ",
//     chatroomname
//   );
//   console.log(
//     "chatController.js chatAdd() req.body chatroompassword =>  ",
//     chatroompassword
//   );

//   try {
//     const room = await Room.findOne({
//       where: {
//         title: chatroomname,
//         roomnumber: chatroompassword,
//       },
//     });

//     console.log("chatController.js chatGetPost() findOne() ", room);
//     if (room) {
//       return res.json({ message: "success", room });
//     } else {
//       return res.json({ message: "failure" });
//     }
//   } catch (err) {
//     console.log("chatController.js chatGetPost() findOne() catch() ", err);
//   }
// };

// exports.chatAdd = async (req, res, next) => {
//   const { chatroomname, chatroompassword, loginState } = req.body;
//   console.log(
//     "chatController.js chatAdd() req.body chatroomname =>  ",
//     chatroomname
//   );
//   console.log(
//     "chatController.js chatAdd() req.body chatroompassword =>  ",
//     chatroompassword
//   );
//   console.log(
//     "chatController.js chatAdd() req.body loginState =>  ",
//     loginState
//   );

//   try {
//     const room = await Room.create({
//       owner: loginState,
//       title: chatroomname,
//       roomnumber: chatroompassword,
//     });

//     console.log("chatController.js chatAdd() create() =>  ", room);
//     return res.json(room);
//   } catch (err) {
//     console.log("chatController.js chatAdd() create() catch() ", err);
//   }
// };

// exports.chatDelete = async (req, res, next) => {
//   try {
//     const result = await chatRemove();
//     if (result === 1) {
//       return res.json({ message: "삭제성공" });
//     } else {
//       return res.json({ message: "삭제실패" });
//     }
//   } catch (e) {
//     console.log("chatController.js chatDelete() create() => ", e);
//     return res.json({ message: "삭제실패", e });
//   }
// };
