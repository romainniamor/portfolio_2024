import React, { useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

export default function HoverLink({ label }) {
  const labelOver = useRef(null);
  const labelBelow = useRef(null);

  const onHover = () => {
    gsap.to([labelOver.current, labelBelow.current], {
      y: "-100%",
      duration: 0.3,
    });
  };

  const onLeave = () => {
    gsap.to([labelOver.current, labelBelow.current], { y: 0, duration: 0.3 });
  };

  return (
    <StyledHoverLink onMouseEnter={onHover} onMouseLeave={onLeave}>
      <StyledLabelOver ref={labelOver}>{label}</StyledLabelOver>
      <StyledLabelBelow>
        <div ref={labelBelow}>{label}</div>
      </StyledLabelBelow>
    </StyledHoverLink>
  );
}

const StyledHoverLink = styled.div`
  cursor: pointer;
  position: relative;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1;
  overflow: hidden;
  text-transform: uppercase;
`;

const StyledLabelOver = styled.div`
  color: rgba(150, 150, 150, 0.2);
  text-transform: uppercase;
  text-align: right;
`;

const StyledLabelBelow = styled.div`
  position: absolute;
  bottom: -100%;
  right: 0;
  color: rgba(150, 150, 150, 1);
  text-align: right;
`;
