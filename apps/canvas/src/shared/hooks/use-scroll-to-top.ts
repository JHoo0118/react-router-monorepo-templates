import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
};
