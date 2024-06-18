import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import useMousePosition from "../../hooks/useMousePosition";
import useOverlaySize from "../../hooks/useOverlaySize";
import { gsap } from "gsap";
import { useContext } from "react";
import AppContext from "../../contexts/appContext";

export default function Header() {
  const { x, y } = useMousePosition();
  const { isVisible, setIsVisible, isHovered, setIsHovered } =
    useContext(AppContext);
  const size = useOverlaySize();
  useEffect(() => {
    // L'overlay n'apparait qu au mouv de la souris
    if (x !== 0 || y !== 0) {
      setIsVisible(true);
      gsap.to(".overlay", {
        "--x": `${x}%`,
        "--y": `${y}%`,
        "--size": `${size()}px`,
        duration: 0.2,
        ease: "sine.out",
      });
    }
  }, [x, y, isHovered, isVisible]);

  return (
    <HeaderStyled>
      <section>
        <h1>Header</h1>
      </section>
      <section
        className="overlay"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <h1
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Header
        </h1>
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
      clip-path: circle(var(--size, 0) at var(--x, 50%) var(--y, 50%));
    }
  }
`;
