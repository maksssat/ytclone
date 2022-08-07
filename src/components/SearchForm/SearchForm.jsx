import React from "react";
import styles from "./styles/SearchForm.module.css";
import { ReactComponent as SearchIcon } from "./images/search.svg";
import { ReactComponent as KeyboardIcon } from "./images/keyboard.svg";

export default function SearchForm() {
  return (
    <form className={styles.form} aria-label="Поиск видео">
      <div className={styles.search_input_container}>
        <SearchIcon className={styles.button_icon} aria-hidden="true" />
        <input className={styles.search_input} type="text" placeholder="Введите запрос" />
        <KeyboardIcon className={styles.keyboard_icon} />
      </div>
      <button className={styles.search_button} type="button" aria-label="Искать">
        <SearchIcon className={styles.button_icon} aria-hidden="true" />
      </button>
    </form>
  );
}
