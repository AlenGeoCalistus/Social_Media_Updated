import { Paper } from "@mui/material";
import React from "react";
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "./styledComponent/StyledSearch";
import { Search as MuiSearch } from "@mui/icons-material";
function Search() {
  return (
    <SearchContainer component={Paper}>
      <SearchWrapper>
        <SearchInput type="text" placeholder="Search..." />
        <SearchIcon>
          <MuiSearch />
        </SearchIcon>
      </SearchWrapper>
    </SearchContainer>
  );
}

export default Search;
