import React from "react";
import Search from "../search/Search";
import { ProfileSideContainer } from "./styledComponents/StyledProfileLeft";
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from "../followersCard/FollowersCard";
function ProfileLeft() {
  return (
    <>
      <ProfileSideContainer flex={3} p={2}>
        <Search/>
        <InfoCard />
        <FollowersCard/>
      </ProfileSideContainer>
    </>
  );
}

export default ProfileLeft;
