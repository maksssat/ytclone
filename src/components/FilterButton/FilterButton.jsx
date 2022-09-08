import React from "react";
import styles from "./FilterButton.module.css";

export default function FilterButton(props) {
  return <button className={styles.button}>{props.text}</button>;
}
