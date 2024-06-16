import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";

export default function RoundedIcon({ url, icon }) {
  return (
    <RoundedIconStyled>
      <a href={url}>{icon}</a>
    </RoundedIconStyled>
  );
}

const RoundedIconStyled = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 25px;
    transition: all 0.3s ease-in-out;
    color: ${theme.colors.greyDark};
    &:hover {
      transform: scale(1.05);
      color: ${theme.colors.greyLight};
    }
    &:active {
      transform: scale(1);
      color: ${theme.colors.greyDark};
    }
  }
`;
