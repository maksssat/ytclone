import React from "react";
import styles from "./HeaderButton.module.css";

export default function HeaderButton(props) {
  return (
    <button
      className={styles.button}
      type="button"
      aria-label={props.label}
      title={props.label}
      onClick={props.onClick}
    >
      <props.icon className={styles.button_icon} aria-hidden="true" />
    </button>
  );
}
