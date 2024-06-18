import { createContext } from "react";

export default createContext({
  isVisible: false,
  setIsVisible: () => {},

  isHovered: false,
  setIsHovered: () => {},
});
