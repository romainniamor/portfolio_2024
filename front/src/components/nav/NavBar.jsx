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
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  z-index: 100;
`;
