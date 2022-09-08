import React, { useState } from "react";
import styles from "./Filter.module.css";
import FilterButton from "../FilterButton/FilterButton";
import { ReactComponent as LeftArrowIcon } from "./images/left_arrow.svg";
import { ReactComponent as RightArrowIcon } from "./images/right_arrow.svg";

export default function Filter() {
  const [leftArrowIsVisible, setLeftArrowIsVisible] = useState(false);
  const [rightArrowIsVisible, setRightArrowIsVisible] = useState(true);

  return (
    <div className={styles.container}>
      {leftArrowIsVisible ? <LeftArrowIcon /> : null}
      <FilterButton text="Все" />
      <FilterButton text="Все" />
      <FilterButton text="Все" />
      <FilterButton text="Все" />
      <FilterButton text="Все" />
      <FilterButton text="Все" />
      {rightArrowIsVisible ? <RightArrowIcon /> : null}
    </div>
  );
}
