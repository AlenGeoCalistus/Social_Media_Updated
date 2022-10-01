import React from "react";
import { Link } from "react-router-dom";

import {
  Tab,
  Tabs,
  AppBar,
  Toolbar,
  Grid,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useState } from "react";
import {
  AccountCircleOutlined,
  AddOutlined,
  HomeOutlined,
  LogoutOutlined,
  MarkAsUnreadOutlined,
  OndemandVideoOutlined,
  PeopleAltOutlined,
  StorefrontOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

function Topbar() {
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="sticky" color="navbarbg" sx={{ height: "3.2rem" }}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              sm={2}
              md={3}
              sx={{ display: { xs: "flex", sm: "flex" } }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <h3 style={{ color: "#fff" }}>say Loud.</h3>
              </Link>
            </Grid>
            <Grid
              item
              xs={8}
              sm={8}
              md={6}
              sx={{
                // display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Tabs
                textColor="inherit"
                sx={{ color: "#fff" }}
                value={value}
                onChange={handleChange}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Tab icon={<HomeOutlined />} aria-label="Home" />
                </Link>
                <Tab icon={<PeopleAltOutlined />} aria-label="People" />
                <Tab icon={<AddOutlined />} aria-label="Share" />
                <Tab icon={<OndemandVideoOutlined />} aria-label="Videos" />
                <Tab icon={<StorefrontOutlined />} aria-label="Market Place" />
              </Tabs>
            </Grid>
            <Grid
              item
              xs={6}
              sm={2}
              md={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Link
                to="../chat"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Badge
                  badgeContent={4}
                  color="primary"
                  sx={{
                    color: "#fff",
                    marginRight: "1.5rem",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <MarkAsUnreadOutlined />
                </Badge>
              </Link>

              <Avatar
                alt="Remy Sharp"
                src={
                  user.profilePicture
                    ? serverPublic + user.profilePicture
                    : "defaultProfile.png"
                }
                sx={{ display: { xs: "none", md: "flex" } }}
                onClick={(e) => setOpen(true)}
              />
              <Avatar
                alt="Profile picture"
                src={
                  user.profilePicture
                    ? serverPublic + user.profilePicture
                    : "defaultProfile.png"
                }
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={(e) => setIsDrawerOpen(true)}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* ***************** Menu ***************** */}

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClick={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

      {/* *************************Drawer************************* */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width={"250px"} textAlign="center">
          <Typography
            sx={{ marginBottom: "1rem" }}
            variant="h6"
            component="div"
            color="initial"
          >
            say Loud.
          </Typography>
          <Divider />
          <List sx={{ marginTop: "1rem" }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {" "}
                    <HomeOutlined />
                  </ListItemIcon>

                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </Link>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <AddOutlined />
                </ListItemIcon>
                <ListItemText primary="Share" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <OndemandVideoOutlined />
                </ListItemIcon>
                <ListItemText primary="Videos" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <StorefrontOutlined />
                </ListItemIcon>
                <ListItemText primary="Market Place" />
              </ListItemButton>
            </ListItem>
            <Link
              to="../chat"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {" "}
                    <MarkAsUnreadOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Chats" />
                </ListItemButton>
              </ListItem>
            </Link>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <AccountCircleOutlined />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <LogoutOutlined />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Topbar;
