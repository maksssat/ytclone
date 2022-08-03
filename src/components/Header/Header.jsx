import React from "react";
import Menu from "../Menu/Menu";
import styles from "./styles/Header.module.css";
import { ReactComponent as MenuIcon } from "./images/menu.svg";
import { ReactComponent as LogoIcon } from "./images/logo.svg";
import { ReactComponent as SearchIcon } from "./images/search.svg";
import { ReactComponent as VideoIcon } from "./images/video.svg";
import { ReactComponent as NotificationsIcon } from "./images/notifications.svg";
import { ReactComponent as PersonIcon } from "./images/person.svg";
import { ReactComponent as VoiceInputIcon } from "./images/voice-input.svg";
import { ReactComponent as KeyboardIcon } from "./images/keyboard.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.button} type="button">
          <MenuIcon className={styles.button_icon} aria-hidden="true" />
        </button>
        <LogoIcon className={styles.logo} />
        <span className={`${styles.country_code}`}>KZ</span>
      </div>
      <div className={styles.center}>
        <form className={styles.form}>
          <div className={styles.search_input_container}>
            <input className={styles.search_input} type="text" placeholder="Введите запрос" />
            <KeyboardIcon className={styles.keyboard_icon} />
          </div>
        </form>
        <button className={styles.search_button} type="button">
          <SearchIcon className={styles.button_icon} aria-hidden="true" />
        </button>
        <button className={styles.voice_input_button} type="button">
          <VoiceInputIcon className={styles.button_icon} aria-hidden="true" />
        </button>
      </div>
      <div className={styles.right}>
        <button className={styles.button} type="button">
          <VideoIcon className={styles.button_icon} aria-hidden="true" />
        </button>
        <button className={styles.button} type="button">
          <NotificationsIcon className={styles.button_icon} aria-hidden="true" />
        </button>
        <button className={styles.button} type="button">
          <PersonIcon className={styles.button_icon} aria-hidden="true" />
        </button>
      </div>
      <Menu />
    </header>
  );
}
