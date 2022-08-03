import React from "react";
import styles from "./styles/MenuSecondaryLink.module.css";

export default function MenuSecondaryLink(props) {
  return (
    <li className={styles.list_item}>
      <a className={styles.link} href="#">
        {props.text}
      </a>
    </li>
  );
}
