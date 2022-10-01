import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../redux/api/UserRequests.js";
import { logout } from "../../redux/actions/AuthActions";
import {
  BoldTxt,
  InfoCardContainer,
  InfoContainer,
  InfoHead,
  LogoutBtn,
  ProfileModalWrapper,
  Span,
} from "./styledComponents/StyledInfoCard";

const InfoCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [modalOpened, setModalOpened] = useState(false);
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching");
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser.data);
        console.log("profileUser", profileUser.data);
      }
    };
    fetchProfileUser();
  }, [profileUserId, user]);

  return (
    <InfoCardContainer style={{ background: "#28343e12" }} className="InfoCard">
      <InfoHead className="infoHead">
        <profileInfoText>Profile Info</profileInfoText>
        {user._id === profileUserId ? (
          <ProfileModalWrapper>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </ProfileModalWrapper>
        ) : (
          ""
        )}
      </InfoHead>

      <InfoContainer className="info">
        {/* */}
        <Span>
          <BoldTxt>Status </BoldTxt>
        </Span>
        <Span>: {profileUser.relationship}</Span>
      </InfoContainer>
      <InfoContainer className="info">
        <Span>
          <BoldTxt>Lives in </BoldTxt>
        </Span>
        <Span> : {profileUser.livesIn}</Span>
      </InfoContainer>
      <InfoContainer className="info">
        <Span>
          <BoldTxt>Works at </BoldTxt>
        </Span>
        <Span> : {profileUser.worksAt}</Span>
      </InfoContainer>

      <LogoutBtn className="button logout-button" onClick={handleLogOut}>
        Log Out
      </LogoutBtn>
    </InfoCardContainer>
  );
};

export default InfoCard;
