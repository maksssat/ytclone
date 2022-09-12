import { useEffect, useState } from "react";

export default function useClientWidth(f) {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const handleWindowResize = () => {
    setWidth(document.documentElement.clientWidth);
    if (typeof f === "function") f(width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return width;
}
