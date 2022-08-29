import React, { useEffect, useRef } from "react";
import styles from "./NotificationsMenu.module.css";
import { ReactComponent as SettingsIcon } from "./images/settings.svg";
import { ReactComponent as NotificationsIcon } from "./images/notifications.svg";

export default function NotificationsMenu({ isOpen, setIsOpen }) {
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
    <div className={styles.menu} aria-label="Список уведомлений" ref={ref}>
      <div className={styles.header}>
        Уведомления <SettingsIcon className={styles.header_icon} />
      </div>
      <div className={styles.list}>
        <NotificationsIcon className={styles.list_icon} />
        <p>Здесь пока ничего нет</p>
        <p className={styles.text}>
          В этом разделе будут собраны уведомления о новых видео на каналах, на которые вы подписаны.
        </p>
      </div>
    </div>
  ) : null;
}
