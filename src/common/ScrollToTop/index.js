import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Za każdym razem, gdy ścieżka się zmieni, przewiń do góry

  return null;
};

export default ScrollToTop;