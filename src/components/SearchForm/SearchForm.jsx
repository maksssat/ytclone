import React, { useRef, useEffect } from "react";
import styles from "./SearchForm.module.css";
import { ReactComponent as SearchIcon } from "./images/search.svg";
import { ReactComponent as KeyboardIcon } from "./images/keyboard.svg";

export default function SearchForm({ isOpen, setIsOpen }) {
  const inputRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      const searchbar = document.querySelector("#searchbar");
      if (searchbar.contains(e.target) === false) setIsOpen(false);
    }

    if (isOpen === true) {
      inputRef.current.focus();
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <form className={styles.form} aria-label="Поиск видео">
      <div className={styles.search_input_container}>
        <SearchIcon className={styles.button_icon} aria-hidden="true" />
        <input className={styles.search_input} type="text" placeholder="Введите запрос" ref={inputRef} />
        <div className={styles.keyboard_icon_wrapper}>
          <KeyboardIcon className={styles.keyboard_icon} />
        </div>
      </div>
      <button className={styles.search_button} type="button" aria-label="Искать" title="Искать">
        <SearchIcon className={styles.button_icon} aria-hidden="true" />
      </button>
    </form>
  );
}
