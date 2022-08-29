import React from "react";
import styles from "./MenuLink.module.css";
import { ReactComponent as ArrowIcon } from "./images/arrow.svg";

export default function MenuLink(props) {
  const itemClass = props.arrow ? styles.item_arrow : styles.item;

  return (
    <li className={itemClass} title={props.text}>
      <a href="#" className={styles.link}>
        <props.icon className={styles.icon} aria-hidden="true" />
        {props.text}
        {props.arrow ? <ArrowIcon className={styles.arrow} /> : null}
      </a>
    </li>
  );
}
