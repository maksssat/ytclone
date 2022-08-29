import React from "react";
import styles from "./MainMenuSecondaryLink.module.css";

export default function MainMenuSecondaryLink(props) {
  return (
    <li className={styles.list_item}>
      <a className={styles.link} href="#">
        {props.text}
      </a>
    </li>
  );
}
