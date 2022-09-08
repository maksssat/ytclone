import React from "react";
import Content from "../Content/Content";
import Filter from "../Filter/Filter";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.container}>
      <Filter />
      <Content />
    </main>
  );
}
