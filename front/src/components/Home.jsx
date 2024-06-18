import styled from "styled-components";
import Footer from "./footer/Footer";
import Header from "./main/Header";
import NavBar from "./nav/NavBar";
import AppContext from "../contexts/appContext";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const appContextValue = {
    isVisible,
    setIsVisible,
    isHovered,
    setIsHovered,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <HomeStyled>
        <NavBar />
        <Header />
        <Footer />
      </HomeStyled>
    </AppContext.Provider>
  );
}

const HomeStyled = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;
