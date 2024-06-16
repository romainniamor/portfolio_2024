import React from "react";
import HoverLink from "./HoverLink";
import styled from "styled-components";

export default function AsideRight() {
  return (
    <NavBarStyled>
      <div>Logo</div>
      <HoverLink label="Link 1" />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;
