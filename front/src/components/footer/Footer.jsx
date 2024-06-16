import React from "react";
import styled from "styled-components";
import MagneticLink from "./MagnetLink";
import RoundedIcon from "../reusableUi/RoundedIcon";
import { BsGithub } from "react-icons/bs";

export default function AsideLeft() {
  return (
    <FooterStyled>
      <li>
        <MagneticLink>
          <RoundedIcon
            url={"https://www.google.com"}
            icon={<BsGithub />}
          ></RoundedIcon>
        </MagneticLink>
      </li>
    </FooterStyled>
  );
}

const FooterStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: min-content;
  position: fixed;
  bottom: 50px;
  left: 30px;
  z-index: 100;
`;
