import React from "react";
import styled from "styled-components";
import AsideLeft from "./asideLeft/AsideLeft";
import AsideRight from "./asideRight/AsideRight";
import Header from "./main/Header";

export default function Home() {
  return (
    <HomeStyled>
      <AsideLeft />
      <Header />
      <AsideRight />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`;
