import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <h1>Header</h1>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  flex: 1;
  background-color: pink;
`;
