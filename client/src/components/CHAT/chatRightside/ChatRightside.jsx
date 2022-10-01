import { Image } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import User from "../../user/User";
import { getAllUser } from "../../../redux/api/UserRequests";
import OnlineUser from "../../onlineUsers/OnlineUsers";
import GroupChatModel from "../../groupChat/GroupChatModel";

function ChatRightside() {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  return (
    <Box flex={2} p={2}>
      <Box sx={{ textAlign: "center" }}>
        <GroupChatModel>
          <Button
            sx={{
              background: "green",
              color: "white",
              borderRadius: "10px",
              marginBottom: "1rem",
            }}
          >
            Start Group Chat
          </Button>
        </GroupChatModel>
      </Box>
      {persons.map((person, id) => {
        if (person._id !== user._id)
          return <OnlineUser person={person} key={id} />;
      })}
    </Box>
  );
}

export default ChatRightside;
