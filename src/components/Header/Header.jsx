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
import { ReactComponent as StartStreamIcon } from "./images/stream.svg";
import { ReactComponent as AddVideoIcon } from "./images/your_videos.svg";
import { ReactComponent as SettingsIcon } from "./images/settings.svg";
import HeaderButton from "../HeaderButton/HeaderButton";
import MenuLink from "../MenuLink/MenuLink";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [addVideoMenuIsOpen, setAddVideoMenuIsOpen] = useState(false);
  const [notificationsMenuIsOpen, setNotificationsMenuIsOpen] = useState(false);

  function handleMenuButtonClick() {
    setMenuIsOpen(!menuIsOpen);
  }

  function handleAddVideoButtonClick() {
    setAddVideoMenuIsOpen(!addVideoMenuIsOpen);
  }

  function handleNotificationsButtonClick() {
    setNotificationsMenuIsOpen(!notificationsMenuIsOpen);
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
        <HeaderButton icon={VideoIcon} label="Добавить видео" onClick={handleAddVideoButtonClick} />

        {addVideoMenuIsOpen === true ? (
          <ul className={styles.add_video_menu}>
            <MenuLink icon={AddVideoIcon} text="Добавить видео" shrinked={false} />
            <MenuLink icon={StartStreamIcon} text="Начать трансляцию" shrinked={false} />
          </ul>
        ) : null}

        <HeaderButton
          icon={NotificationsIcon}
          label="Уведомления"
          onClick={handleNotificationsButtonClick}
        />

        {notificationsMenuIsOpen === true ? (
          <div className={styles.notifications_menu} aria-label="Список уведомлений">
            <div className={styles.notifications_menu_header}>
              Уведомления <SettingsIcon className={styles.notifications_menu_header_icon} />
            </div>
            <div className={styles.notifications_menu_list}>
              <NotificationsIcon className={styles.notifications_menu_list_icon} />
              <p>Здесь пока ничего нет</p>
              <p>
                В этом разделе будут собраны уведомления о новых видео на каналах, на которые вы
                подписаны.
              </p>
            </div>
          </div>
        ) : null}

        <HeaderButton icon={PersonIcon} label="Аккаунт" />
      </div>
      <Menu isOpen={menuIsOpen} />
    </header>
  );
}
