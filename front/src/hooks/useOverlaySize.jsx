import { useContext } from "react";
import AppContext from "../contexts/appContext";

const useOverlaySize = () => {
  const { isVisible, isHovered } = useContext(AppContext);

  const size = () => {
    if (!isVisible) return 0;
    if (isHovered) return 100;
    return 15;
  };

  return size;
};

export default useOverlaySize;
