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

function User({ person }) {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();

  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  // console.log("userfollowing", person._id);
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
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
      <UnfollowBtn onClick={handleFollow}>
        {" "}
        {following ? "Unfollow" : "Follow"}
      </UnfollowBtn>
    </FollowerContainer>
  );
}

export default User;
