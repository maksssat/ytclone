import React, { useEffect, useRef } from "react";
import MenuLink from "../MenuLink/MenuLink";
import styles from "./AddVideoMenu.module.css";
import { ReactComponent as StartStreamIcon } from "./images/stream.svg";
import { ReactComponent as AddVideoIcon } from "./images/your_videos.svg";

export default function AddVideoMenu({ isOpen, setIsOpen }) {
  const ref = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (!ref.current.contains(e.target)) setIsOpen(false);
    }

    if (ref.current !== null && isOpen === true) {
      document.addEventListener("click", handler);
    }

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isOpen, setIsOpen]);

  return isOpen === true ? (
    <ul className={styles.menu} ref={ref}>
      <MenuLink icon={AddVideoIcon} text="Добавить видео" shrinked={false} />
      <MenuLink icon={StartStreamIcon} text="Начать трансляцию" shrinked={false} />
    </ul>
  ) : null;
}
