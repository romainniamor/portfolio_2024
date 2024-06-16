import React, { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import useMousePosition from "../../hooks/useMouse";
import { gsap } from "gsap";

export default function Header() {
  const { x, y } = useMousePosition();
  console.log("x:", x, "y:", y);

  useEffect(() => {
    if (x !== null && y !== null) {
      gsap.to(".overlay", {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.2,
        ease: "sine.out",
      });
    }
  }, [x, y]);

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

      clip-path: circle(170px at var(--x) var(--y));
    }
  }
`;
