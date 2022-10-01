import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { StyledBadge } from "./styledComponents/StyledOnline";

function Online({ user }) {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <List>
      <ListItem className="rightbarOnlineFrnds">
        <ListItemButton className="rightbarOnlineFrnds">
          <ListItemIcon>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="assets/person/1.jpeg" />
            </StyledBadge>
          </ListItemIcon>
          <ListItemText primary={user.username} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default Online;
