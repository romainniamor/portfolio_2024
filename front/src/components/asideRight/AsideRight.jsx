import React from "react";
import HoverLink from "./HoverLink";
import styled from "styled-components";

export default function AsideRight() {
  return (
    <AsideRightStyled>
      <HoverLink label="Link 1" />
    </AsideRightStyled>
  );
}

const AsideRightStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: max-content;
  align-items: start;
  justify-content: flex-start;
  padding: 50px;
`;
