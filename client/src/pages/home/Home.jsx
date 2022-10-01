import { Box, Stack } from "@mui/material";
import React from "react";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
function Home() {
  return (
    <Box>
      <Topbar />
      <Stack direction="row" sx={{display:'flex',justifyContent:'space-around'}}>
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default Home;
