import React, { useEffect, useState } from "react";
import {
  CoverImg,
  Divider,
  Email,
  Follow,
  FollowerLength,
  Followers,
  FollowStatus,
  FollowStatusContainer,
  MyProfile,
  ProfileCardContainer,
  ProfileImg,
  ProfileImgContainer,
  ProfileNameContainer,
  Username,
  VDivider,
} from "./StyledComponents/StyledProfileCard";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as UserApi from "../../redux/api/UserRequests.js";

function ProfileCard({ location }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const [currentUser, setcurrentUser] = useState({});
  const params = useParams();
  const currentUserId = params.id;
  // console.log("params", params.id, user._id);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (currentUserId === user._id) {
        setcurrentUser(user);
      } else {
        console.log("fetching");
        const profileUser = await UserApi.getUser(currentUserId);
        setcurrentUser(profileUser.data);
        // console.log("profileUser", profileUser.data);
      }
    };
    fetchProfileUser();
  }, [currentUserId, user]);
  return (
    <ProfileCardContainer>
      {location === "homepage" ? (
        <>
          <ProfileImgContainer>
            <CoverImg
              src={
                user.coverPicture
                  ? serverPublic + user.coverPicture
                  : serverPublic + "defaultCover.jpg"
              }
              alt="CoverImage"
            />
            <ProfileImg
              src={
                user.profilePicture
                  ? serverPublic + user.profilePicture
                  : serverPublic + "defaultProfile.png"
              }
              alt="ProfileImage"
            />
          </ProfileImgContainer>
          <ProfileNameContainer>
            <Username>
              {" "}
              {user.firstname} {user.lastname}
            </Username>
            <Email>
              {user.worksAt ? user.worksAt : "Write about yourself"}
            </Email>
          </ProfileNameContainer>
          <FollowStatusContainer>
            <Divider />
            <FollowStatus>
              <Follow>
                <FollowerLength>
                  {" "}
                  {user.followers ? user.followers.length : 0}
                </FollowerLength>
                <Followers>Followers</Followers>
              </Follow>
              <VDivider />
              <Follow>
                <FollowerLength>
                  {user.following ? user.following.length : 0}
                </FollowerLength>
                <Followers>Following</Followers>
              </Follow>
            </FollowStatus>
            <Divider />
          </FollowStatusContainer>
        </>
      ) : (
        <ProfileImgContainer>
          <CoverImg
            src={
              currentUser.coverPicture
                ? serverPublic + currentUser.coverPicture
                : serverPublic + "defaultCover.jpg"
            }
            alt="CoverImage"
          />

          <ProfileImg
            src={
              currentUser.profilePicture
                ? serverPublic + currentUser.profilePicture
                : serverPublic + "defaultProfile.png"
            }
            alt="ProfileImage"
          />
        </ProfileImgContainer>
      )}

      {location === "profilePage" && (
        <ProfileNameContainer>
          <Username>
            {" "}
            {currentUser.firstname} {currentUser.lastname}
          </Username>
          <Email>
            {currentUser.worksAt ? currentUser.worksAt : "Write about yourself"}
          </Email>
        </ProfileNameContainer>
      )}
      {location === "profilePage" && (
        <FollowStatusContainer>
          <Divider />
          <FollowStatus>
            <Follow>
              <FollowerLength>
                {currentUser.followers ? currentUser.followers.length : 0}
              </FollowerLength>
              <Followers>Followers</Followers>
            </Follow>
            <VDivider />
            <Follow>
              <FollowerLength>
                {" "}
                {currentUser.following ? currentUser.following.length : 0}
              </FollowerLength>
              <Followers>Following</Followers>
            </Follow>

            {/************************** ProfilePage **************************/}
            {/* {location === "profilePage" && ( */}
            <>
              <VDivider></VDivider>
              <Follow>
                <FollowerLength>
                  {" "}
                  {posts.filter((post) => post.userId === user._id).length}
                </FollowerLength>
                <Followers>Posts</Followers>
              </Follow>{" "}
            </>
            {/* )} */}
          </FollowStatus>
          <Divider />
        </FollowStatusContainer>
      )}
      {location === "profilePage" ? (
        ""
      ) : (
        <MyProfile>
          {" "}
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </MyProfile>
      )}
    </ProfileCardContainer>
  );
}

export default ProfileCard;
