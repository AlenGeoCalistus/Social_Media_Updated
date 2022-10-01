import React, { useEffect, useState } from "react";
import { getUser } from "../../redux/api/UserRequests";

function Conversation({ data, currentUserId, online }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    // console.log("userIddddd", userId);

    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        // console.log("UserDataaaa", data);
      } catch (error) {
        console.log("error from consversation", error);
      }
    };
    getUserData();
  }, []);
  return (
    <>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}

          <img
            src={
              userData?.profilePicture
                ? PF + userData.profilePicture
                : PF + "defaultProfile.png"
            }
            alt=""
            className="followerImage"
            style={{ width: "50%", height: "50%" }}
          />
          <div className="name" style={{ fontSize: "0.8rem" }}>
            <span>
              {userData?.firstname} {userData?.lastname}
            </span>
            <span>{online ? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid ececec" }} />
    </>
  );
}

export default Conversation;
