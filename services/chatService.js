const Room = require("../models/room");

exports.chatGetPost = async (params) => {
  const { chatroomname, chatroompassword, username } = params;

  try {
    const room = await Room.findOne({
      where: {
        title: chatroomname,
        roomnumber: chatroompassword,
        //owner: username,
      },
    });

    if (room) {
      return { message: "success", room };
    } else {
      return { message: "failure" };
    }
  } catch (err) {
    console.log("chatService.js chatGetPost() findOne() catch() ", err);
    return { message: "failure" };
  }
};

exports.chatAdd = async (params) => {
  const { chatroomname, chatroompassword, username } = params;

  try {
    const room = await Room.create({
      owner: username,
      title: chatroomname,
      roomnumber: chatroompassword,
    });

    console.log("chatService.js chatAdd() create() room ", room);

    return { message: "success", room };
  } catch (err) {
    console.log("chatService.js chatAdd() create() catch() ", err);
    return { message: "failure" };
  }
};

exports.chatRemove = async (param) => {
  if (param) {
    const { chatroomname, chatroompassword } = param;
    console.log(
      "chatServices.js chatRemove()  chatroomname =>  ",
      chatroomname
    );
    console.log(
      "chatServices.js chatRemove() chatroompassword =>  ",
      chatroompassword
    );
    Room.destroy({
      where: {
        title: chatroomname,
        roomnumber: chatroompassword,
      },
    })
      .then((result) => {
        console.log("chatService.js chatRemove() destroy() then() => ", result);
        return result;
      })
      .catch((err) => {
        console.log("chatServices.js chatRemove() destroy() catch() ", err);
      });
  }
};
