import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

export default function MagneticLink({ url }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    console.log(e);
    console.log("onHover");
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const { x, y } = position;
    gsap.to(ref.current, {
      x,
      y,

      ease: "bounce.out",
      duration: 0.3,
    });
  }, [position]);

  return (
    <MagneticLinkStyled
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <AiOutlineGithub size={50} />
      </a>
    </MagneticLinkStyled>
  );
}

const MagneticLinkStyled = styled.div`
  position: relative;
  padding: 10px;
  background: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
  }
`;
