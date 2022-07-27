import React from "react";
import styles from "./styles/header.module.css";
import { ReactComponent as Menu } from "./images/menu.svg";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Search } from "./images/search.svg";
import { ReactComponent as Video } from "./images/video.svg";
import { ReactComponent as Notifications } from "./images/notifications.svg";
import { ReactComponent as Person } from "./images/person.svg";
import { ReactComponent as VoiceInput } from "./images/voice-input.svg";
import { ReactComponent as Keyboard } from "./images/keyboard.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.button} type="button">
          <Menu className={styles.button_icon} />
        </button>
        <Logo className={styles.logo} />
        <span className={`${styles.country_code}`}>KZ</span>
      </div>
      <div className={styles.center}>
        <form className={styles.form}>
          <div className={styles.search_input_container}>
            <input className={styles.search_input} type="text" placeholder="Введите запрос" />
            <Keyboard className={styles.keyboard_icon} />
          </div>
        </form>
        <button className={styles.search_button} type="button">
          <Search className={styles.button_icon} />
        </button>
        <button className={styles.voice_input_button} type="button">
          <VoiceInput className={styles.button_icon} />
        </button>
      </div>
      <div className={styles.right}>
        <button className={styles.button} type="button">
          <Video className={styles.button_icon} />
        </button>
        <button className={styles.button} type="button">
          <Notifications className={styles.button_icon} />
        </button>
        <button className={styles.button} type="button">
          <Person className={styles.button_icon} />
        </button>
      </div>
    </header>
  );
}
