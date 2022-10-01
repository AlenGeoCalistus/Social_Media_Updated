import React from "react";
import Sponcored from "../sponcored/Sponcored";
import { RightbarContainer } from "./styledComponents/StyledRightbar";

function Rightbar() {
  return (
    <>
    <RightbarContainer flex={1} p={2}>
      <Sponcored/>
    </RightbarContainer>
    </>
  );
}

export default Rightbar;
