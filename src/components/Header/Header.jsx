import React, { useState } from "react";
import Menu from "../Menu/Menu";
import AddVideoMenu from "../AddVideoMenu/AddVideoMenu";
import HeaderButton from "../HeaderButton/HeaderButton";
import NotificationsMenu from "../NotificationsMenu/NotificationsMenu";
import SearchForm from "../SearchForm/SearchForm";
// import useClientWidth from "../../hooks/useClientWidth";
import styles from "./styles/Header.module.css";
import { ReactComponent as MenuIcon } from "./images/menu.svg";
import { ReactComponent as LogoIcon } from "./images/logo.svg";
import { ReactComponent as VideoIcon } from "./images/video.svg";
import { ReactComponent as NotificationsIcon } from "./images/notifications.svg";
import { ReactComponent as PersonIcon } from "./images/person.svg";
import { ReactComponent as VoiceInputIcon } from "./images/voice-input.svg";
import SettingsMenu from "../SettingsMenu/SettingsMenu";

export default function Header() {
  const [mainMenuIsOpen, setMenuIsOpen] = useState(true);
  const [addVideoMenuIsOpen, setAddVideoMenuIsOpen] = useState(false);
  const [notificationsMenuIsOpen, setNotificationsMenuIsOpen] = useState(false);
  const [settingsMenuIsOpen, setSettingsMenuIsOpen] = useState(false);

  function handleMenuButtonClick() {
    setMenuIsOpen(!mainMenuIsOpen);
  }

  function handleAddVideoMenuButtonClick(e) {
    e.stopPropagation();
    setNotificationsMenuIsOpen(false);
    setSettingsMenuIsOpen(false);
    setAddVideoMenuIsOpen(!addVideoMenuIsOpen);
  }

  function handleNotificationsButtonClick(e) {
    e.stopPropagation();
    setAddVideoMenuIsOpen(false);
    setSettingsMenuIsOpen(false);
    setNotificationsMenuIsOpen(!notificationsMenuIsOpen);
  }

  function handleSettingsMenuClick(e) {
    e.stopPropagation();
    setAddVideoMenuIsOpen(false);
    setNotificationsMenuIsOpen(false);
    setSettingsMenuIsOpen(!settingsMenuIsOpen);
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
        <HeaderButton icon={VideoIcon} label="Добавить видео" onClick={handleAddVideoMenuButtonClick} />

        <AddVideoMenu isOpen={addVideoMenuIsOpen} setIsOpen={setAddVideoMenuIsOpen} />

        <HeaderButton
          icon={NotificationsIcon}
          label="Уведомления"
          onClick={handleNotificationsButtonClick}
        />

        <NotificationsMenu isOpen={notificationsMenuIsOpen} setIsOpen={setNotificationsMenuIsOpen} />

        <HeaderButton icon={PersonIcon} label="Аккаунт" onClick={handleSettingsMenuClick} />

        <SettingsMenu isOpen={settingsMenuIsOpen} setIsOpen={setSettingsMenuIsOpen} />
      </div>
      <Menu isOpen={mainMenuIsOpen} />
    </header>
  );
}
