import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Header() {
  return (
    <HeaderStyled>
      <section>
        <h1>Header</h1>
      </section>
      <section className="overlay">
        <h1>Header</h1>
      </section>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  color: ${theme.colors.greyLight};
  section {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &.overlay {
      background-color: rgb(163 230 53);
      color: ${theme.colors.dark};
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 100vh;

      clip-path: circle(170px at 50% 50%);
    }
  }
`;
