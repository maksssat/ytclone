import React, { useState } from "react";
import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";
// import useClientWidth from "../../hooks/useClientWidth/useClientWidth";
import styles from "./styles/Header.module.css";
import { ReactComponent as MenuIcon } from "./images/menu.svg";
import { ReactComponent as LogoIcon } from "./images/logo.svg";
import { ReactComponent as VideoIcon } from "./images/video.svg";
import { ReactComponent as NotificationsIcon } from "./images/notifications.svg";
import { ReactComponent as PersonIcon } from "./images/person.svg";
import { ReactComponent as VoiceInputIcon } from "./images/voice-input.svg";
import HeaderButton from "../HeaderButton/HeaderButton";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  function handleMenuButtonClick() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <HeaderButton icon={MenuIcon} label="Меню" onClick={handleMenuButtonClick} />
        <LogoIcon className={styles.logo} aria-label="Логотип" />
        <span className={`${styles.country_code}`}>KZ</span>
      </div>

      <div className={styles.center}>
        <SearchForm />
        <HeaderButton icon={VoiceInputIcon} label="Голосовой поиск" />
      </div>

      <div className={styles.right}>
        <HeaderButton icon={VideoIcon} label="Добавить видео" onClick={handleMenuButtonClick} />
        <HeaderButton icon={NotificationsIcon} label="Уведомления" />
        <HeaderButton icon={PersonIcon} label="Аккаунт" />
      </div>
      <Menu isOpen={menuIsOpen} />
    </header>
  );
}
