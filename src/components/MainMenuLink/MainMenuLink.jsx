import React from "react";
import styles from "./MainMenuLink.module.css";

export default function MainMenuLink(props) {
  const linkClassName = props.shrinked ? styles.link_shrinked : styles.link_expanded;
  const itemClassName = props.shrinked ? styles.item_shrinked : styles.item_expanded;
  const iconClassName = props.shrinked ? styles.icon_shrinked : styles.icon_expanded;

  return (
    <li className={itemClassName} title={props.text}>
      <a href="#" className={linkClassName}>
        <props.icon className={iconClassName} aria-hidden="true" />
        {props.text}
      </a>
    </li>
  );
}
