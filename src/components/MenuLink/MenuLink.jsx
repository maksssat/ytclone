import React from "react";
import styles from "./styles/MenuLink.module.css";

export default function MenuLink(props) {
  return (
    <li className={styles.item} title={props.text}>
      <a href="#" className={styles.link}>
        <props.icon className={styles.icon} aria-hidden="true" />
        {props.text}
      </a>
    </li>
  );
}
