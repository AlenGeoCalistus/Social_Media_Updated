import React from "react";
import {
  AdsImg,
  BirthdayContainer,
  BirthdayImg,
  BirthdayText,
  ContactsContainer,
  SponcoredContainer,
  SponcoredText,
} from "./styledComponents/StyledSponcored";
import giftImage from "../../img/gift.png";
import AdImg from "../../img/ad.png";
import { Users } from "../../dummyData";
import { Box, Divider } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import Online from "../online/Online";
function Sponcored() {
  return (
    <>
      <SponcoredContainer p={2} > 
        <SponcoredText>Sponcored</SponcoredText>
        <AdsImg className="adsImg" src={AdImg} alt="" />
        <Divider
          sx={{ marginBottom: "20px" }}
          className="rightbarDivider"
          variant="middle"
        />
        <SponcoredText>Birthdays</SponcoredText>
        <BirthdayContainer>
          <BirthdayImg src={giftImage} />
          <BirthdayText>
            <b>John</b> and <b>3 others </b> have birthday today.
          </BirthdayText>
        </BirthdayContainer>
        <Divider
          sx={{ marginTop: "20px", marginBottom: "20px" }}
          className="rightbarDivider"
          variant="middle"
        />
        <ContactsContainer>
          <SponcoredText>Contacts</SponcoredText>
          <MoreVert />
        </ContactsContainer>
        <Box>
        {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
        </Box>
      </SponcoredContainer>
    </>
  );
}

export default Sponcored;
