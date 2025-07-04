// src/Components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top-left
  }, [pathname]);
  return null;
}

export default ScrollToTop;
