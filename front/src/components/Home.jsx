import React from "react";
import styled from "styled-components";
import Footer from "./footer/Footer";
import Header from "./main/Header";
import NavBar from "./nav/NavBar";

export default function Home() {
  return (
    <HomeStyled>
      <NavBar />
      <Header />
      <Footer />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;
