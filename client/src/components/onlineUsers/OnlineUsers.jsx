import React, { useState } from "react";
import {
  FollowerContainer,
  FollowerDetailsContainer,
  FollowerImg,
  FollowerName,
  FollowerNameContainer,
  Span,
  UnfollowBtn,
} from "../followersCard/StyledComponents/StyledFollowersCard";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from "../../redux/actions/UserAction";
import axios from "axios";
import { createChat } from "../../redux/api/ChatRequest";

function OnlineUser({ person }) {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();

  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  // console.log("userfollowing", person._id);
  const handleMessage = async () => {
    const members = {
      senderId: user._id,
      receiverId: person._id,
    };

    const { data } = await createChat(members);
    // console.log('dataaaaaa',data);
  };
  return (
    <FollowerContainer>
      <FollowerDetailsContainer>
        <Link to={`/profile/${person._id}`}>
          <FollowerImg
            src={
              publicFolder + person.profilePicture
                ? publicFolder + person.profilePicture
                : publicFolder + "defaultProfile.png"
            }
            alt="profile"
            className="followerImage"
          />
        </Link>
        <FollowerNameContainer>
          <FollowerName>{person.firstname}</FollowerName>
          {/* <Span>{person.username}</Span> */}
        </FollowerNameContainer>
      </FollowerDetailsContainer>
      <UnfollowBtn onClick={handleMessage}>
        Message {/* {following ? "Unfollow" : "Follow"} */}
      </UnfollowBtn>
    </FollowerContainer>
  );
}

export default OnlineUser;
