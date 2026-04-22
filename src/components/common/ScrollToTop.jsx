import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Yeh hook humein batata hai ki current URL path kya hai
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi pathname change hoga, window top par scroll ho jayegi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Yeh component kuch render nahi karega, sirf logic chalayega
};

export default ScrollToTop;
