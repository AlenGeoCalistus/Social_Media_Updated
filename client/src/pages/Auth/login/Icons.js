import React from "react";
import styled from "styled-components";

function Icons({ color, children }) {
  return <StyledIcon background={color}>{children}</StyledIcon>;
}

const StyledIcon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: #fff;
  cursor: pointer;
  background: ${(props) => props.background};
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  @media only screen and (max-width: 320px) {
    height: 2.5rem;
    width: 2.5rem;
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
  @media only screen and (max-width: 375px) {
    height: 2.5rem;
    width: 2.5rem;
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
  @media only screen and (max-width: 425px) {
    height: 2.5rem;
    width: 2.5rem;
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
  }
`;

export default Icons;
