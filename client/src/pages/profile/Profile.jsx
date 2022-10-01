import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Posts from "../../components/posts/Posts";
import ProfileCard from "../../components/profileCard/ProfileCard";
import ProfileLeft from "../../components/profileLeft/ProfileLeft";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";

import {
  ProfileCenter,
  ProfileContainer,
} from "./styledComponents/StyledProfile";
import PostShare from "../../components/postShare/PostShare";
import Sponcored from "../../components/sponcored/Sponcored";

function Profile() {
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  return (
    <>
      <Topbar />
      <ProfileContainer>
        <ProfileLeft flex={1} />
        <ProfileCenter flex={4} p={2}>
          <ProfileCard location="profilePage" />
          {user._id === params.id && <PostShare />}
          <Posts />
        </ProfileCenter>

        <Rightbar />
      </ProfileContainer>
    </>
  );
}

export default Profile;
