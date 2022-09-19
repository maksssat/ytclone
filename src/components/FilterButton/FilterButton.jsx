import React from "react";
import styles from "./FilterButton.module.css";

export default function FilterButton({ text, active }) {
  return <button className={active ? styles.active_button : styles.button}>{text}</button>;
}
