import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Message from "../Message";
import "./ChatCenter.css";
import InputEmoji from "react-input-emoji";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { userChats } from "../../../redux/api/ChatRequest";
import { getUser } from "../../../redux/api/UserRequests";
import { addMessage, getMessages } from "../../../redux/api/MessageRequest";

function ChatCenter({ chat, currentUser, setSendMessage, recieveMessage }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userData, setUserData] = useState(null);
  const scroll = useRef();

  useEffect(() => {
    if (recieveMessage !== null && recieveMessage.chatId === chat._id) {
      setMessages([...messages, recieveMessage]);
    }
  }, [recieveMessage]);

  //fetching data header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        // console.log("UserDataaaa", data);
      } catch (error) {
        console.log("error from consversation", error);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  //fetching messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        // console.log("Message Data", data);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    };
    //sending message to database
    try {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (error) {
      console.log("error", error);
    }
    const receiverId = chat.members.find((id) => id !== currentUser);
    setSendMessage({ ...message, receiverId });
  };

  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <Box flex={4} p={2}>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {chat ? (
            <>
              <div className="chatboxTop">
                {messages.map((m) => (
                  <Message message={m} own={m.senderId === user._id} />
                ))}
              </div>

              <div className="chatboxBottom">
                <InputEmoji className="chatMessageInput" value={newMessage}
                  onChange={handleChange}/>
                {/* <textarea
                  className="chatMessageInput"
                  placeholder="Type a message"
                  value={newMessage}
                  onChange={handleChange}
                ></textarea> */}
                <button className="chatSentButton" onClick={handleSend}>
                  Send
                </button>
              </div>
            </>
          ) : (
            <span className="noCoversation">
              Open a conversation to start a chat...
            </span>
          )}
        </div>
      </div>
    </Box>
  );
}

export default ChatCenter;
