import { Image } from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUser } from "../../../redux/api/UserRequests";

function ChatLeftside({ data, currentUserId, online }) {
  console.log(data);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    // console.log("userIddddd", userId);

    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        // console.log("UserDataaaa", data);
      } catch (error) {
        console.log("error from consversation", error);
      }
    };
    getUserData();
  }, []);
  return (
    <Box flex={1} p={2} sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ textAlign: "center" }}>Recent Chats</Box>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ListItem sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <ListItemAvatar sx={{ cursor: "pointer" }}>
              <Avatar
                src={
                  userData?.profilePicture
                    ? PF + userData.profilePicture
                    : PF + "defaultProfile.png"
                }
                alt=""
                className="followerImage"
                sx={{ width: "3rem", height: "3rem" }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={userData?.firstname}
              // secondary={online ? "Online" : "Offline"}
            />
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default ChatLeftside;
