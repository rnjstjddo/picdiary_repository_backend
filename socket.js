const { Server } = require("socket.io");
const { chatRemove, chatAdd, chatGetPost } = require("./services/chatService");

module.exports = (server) => {
  const io = new Server(server, {
    cors: { origin: "*" },
    //cors: { origin: "http://localhost:3000" },
  });

  let clientArray = new Array();

  let roomArray = new Array();

  io.sockets.on("connection", (socket) => {
    const req = socket.request;
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    // const username = socket.handshake.query.username;
    // const chatroomname = socket.handshake.query.chatroomname;
    // const chatroompassword = socket.handshake.query.chatroompassword;
    const socketId = socket.id;
    //console.log("새로운 클라이언트 접속 req.headers -> ", ip); //::1
    console.log("클라이언트 접속 socket.id -> ", socket.id);

    socket.on("roomcreate", (data) => {
      const { username, chatroomname, chatroompassword } = data;
      console.log("서버 roomcreate 이벤트받음 socket.id ->", socket.id);

      const usernameExist = clientArray.filter((c) => c.username === username);

      if (usernameExist.length === 0) {
        clientArray.push({
          socketId,
          username,
          chatroomname,
          chatroompassword,
        });
      }

      const result = async () => {
        return await chatGetPost({ username, chatroomname, chatroompassword });
      };

      result().then((result) => {
        console.log("roomcreate 서버 on이벤트 기존방 db찾기 결과 -> ", result);

        if (result?.message === "success") {
          //기존방 있는경우
          console.log(
            "roomcreate 서버 on이벤트 기존방 db찾기 결과 기존방 있는 경우 진입"
          );

          socket.join(chatroomname);
          io.to(chatroomname).emit(
            "roomcreate",
            username + "님이 들어왔습니다"
          );
        } else {
          //기존방없는경우
          console.log(
            "roomcreate 서버 on이벤트 기존방 db찾기 결과 기존방 없는 경우 진입"
          );

          const result = async () => {
            return await chatAdd({ username, chatroomname, chatroompassword });
          };

          result().then((result) => {
            console.log(
              "roomcreate 서버 on이벤트 방db추가 결과 then() -> ",
              result
            );

            if (result?.message === "success") {
              socket.join(chatroomname);
              io.to(chatroomname).emit(
                "roomcreate",
                chatroomname + "방이 생성되었습니다."
              );
            } //if
          }); //model then 새로운방 create
        } //if else
      }); //model then 기존방체크
    }); //on roomcreate

    socket.on("friend", (data) => {
      console.log("서버 friend 이벤트받음 socket.id => ", socket.id);
      const { chatroomname, id, chatroompassword } = data;

      const exist = clientArray.filter((c) => c.username === id);
      if (exist.length === 0) {
        clientArray.push({
          socketId,
          username: id,
          chatroomname,
          chatroompassword,
        });
      }
      //const matchResult = roomArray.filter((n) => n.roomname === chatroomname);

      socket.join(chatroomname);
      io.to(chatroomname).emit(
        "friend",
        `${id} 님이 ${chatroomname} 방에 입장했습니다.`
      );
    }); //on friend

    socket.on("out", ({ chatroomname, loginState, chatroompassword }) => {
      console.log("서버 out 이벤트받음 socket.id=> ", socket.id);

      console.log(
        "서버 out 이벤트받음 on out io.adapter.rooms => ",
        io.of("/").adapter.rooms.get(chatroomname)
      );

      const matchResult = roomArray.filter((n) => n.roomname === chatroomname);

      socket.leave(chatroomname); //방나가기
      const chatcount = io.of("/").adapter.rooms.get(chatroomname)?.size || 0;
      console.log("서버 out 이벤트받음 현재 인원수-> ", chatcount);

      if (chatcount === 0) {
        chatRemove({ chatroomname, chatroompassword })
          .then((result) => {
            if (result === 1) {
              console.log(chatroomname + " 방은 사람이 없어 삭제시킴 완료");
            }
          })
          .catch((e) => {
            console.log(
              chatroomname + " 방은 사람이 없어 삭제시키는 중 오류 ",
              e
            );
          });
      } else {
        console.log(chatroomname + " 방은 사람 " + chatcount + "명 존재");

        io.to(chatroomname).emit("out", {
          message: `${loginState} 님이 나갔습니다.`,
          socketid: socket.id,
        });
      }

      //      io.sockets.in(chatroomname).emit("out", `${loginState} 님이 나갔습니다.`);
      clientArray = clientArray.filter((c) => (c.socketId = socket.id));
    });

    socket.on("disconnect", () => {
      console.log("서버에서 disconnect 이벤트받음 socket.id -> ", socket.id);
      const exist = clientArray.filter((c) => c.socketId === socket.id);

      const { chatroomname, socketId, username, chatroompassword } = exist;

      const matchResult = roomArray.filter((n) => n.roomname === chatroomname);

      const chatnumber =
        io.sockets.adapter.rooms.get(matchResult.roomid)?.size || 0;

      if (chatnumber === 0) {
        console.log(
          "서버에서 disconnect 이벤트받음 방인원 1명인데 discount될경우 방삭제처리"
        );

        chatRemove(chatroomname, chatroompassword)
          .then((result) => {
            if (result === 1) {
              console.log(chatroomname + " 방은 사람이 없어 삭제시킴 완료");
            }
          })
          .catch((e) => {
            console.log(
              chatroomname + " 방은 사람이 없어 삭제시키는 중 오류 ",
              e
            );
          });
      }

      io.to(chatroomname).emit("out", username + "님이 나갔습니다.");
      clientArray = clientArray.filter((c) => (c.socketId = socketId));
    });

    socket.on("message", (data) => {
      const { message, username, chatroomname } = data;
      console.log("서버 message 이벤트받음 socket.id -> ", socket.id);
      console.log(
        username +
          " 서버들어옴 on message 이벤트에서 io.of('/').adapter.rooms.get(chatroomname) -> ",
        io.of("/").adapter.rooms.get(chatroomname)
      );
      const matchResult = roomArray.filter((n) => n.roomname === chatroomname);

      io.to(chatroomname).emit("message", data);
    }); //message
  }); //on connection
}; //module.exports
