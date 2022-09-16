import React, { useState } from "react";
import HeaderButton from "../HeaderButton/HeaderButton";
import SearchForm from "../SearchForm/SearchForm";
import AddVideoMenu from "../AddVideoMenu/AddVideoMenu";
import NotificationsMenu from "../NotificationsMenu/NotificationsMenu";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import useClientWidth from "../../hooks/useClientWidth";
import styles from "./Header.module.css";
import { ReactComponent as MenuIcon } from "./images/menu.svg";
import { ReactComponent as LogoIcon } from "./images/logo.svg";
import { ReactComponent as VideoIcon } from "./images/video.svg";
import { ReactComponent as VideoFilledIcon } from "./images/video_filled.svg";
import { ReactComponent as NotificationsIcon } from "./images/notifications.svg";
import { ReactComponent as NotificationsFilledIcon } from "./images/notifications_filled.svg";
import { ReactComponent as PersonIcon } from "./images/person.svg";
import { ReactComponent as VoiceInputIcon } from "./images/voice-input.svg";
import { ReactComponent as SearchIcon } from "./images/search.svg";
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";

export default function Header({ setMainMenuIsOpen, mainMenuIsOpen }) {
  const [addVideoMenuIsOpen, setAddVideoMenuIsOpen] = useState(false);
  const [notificationsMenuIsOpen, setNotificationsMenuIsOpen] = useState(false);
  const [settingsMenuIsOpen, setSettingsMenuIsOpen] = useState(false);
  const [searchbarIsOpen, setSearchbarIsOpen] = useState(false);

  function resizeHandler(width) {
    if (width > 656) setSearchbarIsOpen(false);
  }
  const width = useClientWidth(resizeHandler);

  function handleMenuButtonClick() {
    setMainMenuIsOpen(!mainMenuIsOpen);
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

  function handleSearchButtonClick(e) {
    e.stopPropagation();
    setSearchbarIsOpen(!searchbarIsOpen);
  }

  const header = (
    <header className={styles.header}>
      <div className={styles.left}>
        {width > 791 ? (
          <HeaderButton icon={MenuIcon} label="Меню" onClick={handleMenuButtonClick} />
        ) : null}
        <LogoIcon className={styles.logo} aria-label="Логотип" />
        <span className={`${styles.country_code}`}>KZ</span>
      </div>

      {width > 791 ? (
        <div className={styles.center}>
          <SearchForm />
          <HeaderButton icon={VoiceInputIcon} label="Голосовой поиск" />
        </div>
      ) : null}

      <div className={styles.right}>
        {width < 792 ? (
          <>
            <HeaderButton icon={SearchIcon} label="Поиск" onClick={handleSearchButtonClick} />
            {width > 428 ? <HeaderButton icon={VoiceInputIcon} label="Голосовой поиск" /> : null}
          </>
        ) : null}

        {/*    {width > 428 ? ( */}
        <HeaderButton
          icon={addVideoMenuIsOpen ? VideoFilledIcon : VideoIcon}
          label="Добавить видео"
          onClick={handleAddVideoMenuButtonClick}
        />
        {/*  ) : null} */}

        <AddVideoMenu isOpen={addVideoMenuIsOpen} setIsOpen={setAddVideoMenuIsOpen} />

        {width > 428 ? (
          <HeaderButton
            icon={notificationsMenuIsOpen ? NotificationsFilledIcon : NotificationsIcon}
            label="Уведомления"
            onClick={handleNotificationsButtonClick}
          />
        ) : null}

        <NotificationsMenu isOpen={notificationsMenuIsOpen} setIsOpen={setNotificationsMenuIsOpen} />

        <HeaderButton icon={PersonIcon} label="Аккаунт" onClick={handleSettingsMenuClick} />

        <SettingsMenu isOpen={settingsMenuIsOpen} setIsOpen={setSettingsMenuIsOpen} />
      </div>
    </header>
  );

  const searchbar = (
    <div className={styles.searchbar} id="searchbar">
      <HeaderButton icon={ArrowIcon} label="Поиск видео" onClick={handleSearchButtonClick} />
      <div className={styles.center}>
        <SearchForm isOpen={searchbarIsOpen} setIsOpen={setSearchbarIsOpen} />
        <HeaderButton icon={VoiceInputIcon} label="Голосовой поиск" />
      </div>
    </div>
  );

  if (searchbarIsOpen === true && width < 657) return searchbar;
  else return header;
}
