import { Box, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import ChatCenter from "../../components/CHAT/chatCenter/ChatCenter";
import ChatLeftside from "../../components/CHAT/chatLeftside/ChatLeftside";
import ChatRightside from "../../components/CHAT/chatRightside/ChatRightside";

import Topbar from "../../components/topbar/Topbar";
import { userChats } from "../../redux/api/ChatRequest";
function CHAT() {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recieveMessage, setRecieveMessage] = useState(null);
  const socket = useRef();

  //sending message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
      // console.log('user',onlineUsers);
    });
  }, [user]);

  //recieving message to socket server
  useEffect(() => {
    socket.current.on(
      "recieve-message",
      (data) => {
        setRecieveMessage(data);
      },
      []
    );
  }, []);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
        // console.log("user chats dataaaaaa", data);
      } catch (error) {
        console.log("error from getChats CHATS PAGE", error);
      }
    };
    getChats();
  }, [user]);

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };
  console.log("recieveMessage", recieveMessage);
  return (
    <Box>
      <Topbar />
      <Stack
        direction="row"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        {chats.map((chat) => (
          <div onClick={() => setCurrentChat(chat)}>
            <ChatLeftside
              data={chat}
              currentUserId={user._id}
              online={checkOnlineStatus(chat)}
            />
          </div>
        ))}
        {/* <ChatLeftside /> */}
        <ChatCenter
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          recieveMessage={recieveMessage}
        />
        <ChatRightside />
      </Stack>
    </Box>
  );
}

export default CHAT;
