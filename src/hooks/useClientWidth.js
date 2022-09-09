import { useEffect, useState } from "react";

export default function useClientWidth(setIsOpen) {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const handleWindowResize = () => {
    setWidth(document.documentElement.clientWidth);
    if (width <= 1312) setIsOpen(false);
    else if (width > 1312) setIsOpen(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  if (width > 1312) return "LARGE";
  else return "MEDIUM";
}
