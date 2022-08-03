import React from "react";
import styles from "./styles/MenuLink.module.css";

export default function MenuLink(props) {
  return (
    <li className={styles.list_item}>
      <a href="#" className={styles.link}>
        <props.icon className={styles.list_item_icon} aria-hidden="true" />
        {props.text}
      </a>
    </li>
  );
}
