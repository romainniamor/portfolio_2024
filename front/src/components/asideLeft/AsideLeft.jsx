import React from "react";
import styled from "styled-components";
import MagneticLink from "./MagnetLink";
import RoundedIcon from "../reusableUi/RoundedIcon";
import { BsGithub } from "react-icons/bs";

export default function AsideLeft() {
  return (
    <AsideLeftStyled>
      <div className="magnetic-box">
        <MagneticLink>
          <RoundedIcon
            url={"https://www.google.com"}
            icon={<BsGithub />}
          ></RoundedIcon>
        </MagneticLink>
      </div>
    </AsideLeftStyled>
  );
}

const AsideLeftStyled = styled.div`
  height: 100%;
  width: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px;
  .magnectic-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
