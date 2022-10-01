import React from "react";
import Search from "../search/Search";
import ProfileCard from "../profileCard/ProfileCard";
import { LeftbarContainer } from "./styledComponents/StyledLeftbar";
import FollowersCard from "../followersCard/FollowersCard";

function Leftbar() {
  return (
    <LeftbarContainer flex={1} p={2}>
      <Search />
      <ProfileCard location="homepage" />
      <FollowersCard />
    </LeftbarContainer>
  );
}

export default Leftbar;
