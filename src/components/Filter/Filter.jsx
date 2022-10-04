import React, { useRef, useState, useLayoutEffect } from "react";
import styles from "./Filter.module.css";
import FilterButton from "../FilterButton/FilterButton";
import { ReactComponent as LeftArrowIcon } from "./images/left_arrow.svg";
import { ReactComponent as RightArrowIcon } from "./images/right_arrow.svg";
import { useEffect } from "react";

export default function Filter() {
  const [leftArrowIsVisible, setLeftArrowIsVisible] = useState(false);
  const [rightArrowIsVisible, setRightArrowIsVisible] = useState(true);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    containerRef.current.scrollLeft = scrollLeft;

    function resizeHandler() {
      setClientWidth(document.documentElement.clientWidth);
    }

    window.addEventListener("resize", resizeHandler);

    if (containerRef.current.scrollWidth <= containerRef.current.clientWidth) {
      setLeftArrowIsVisible(false);
      setRightArrowIsVisible(false);
    } else {
      if (scrollLeft > 0) setLeftArrowIsVisible(true);
      else if (scrollLeft <= 0) setLeftArrowIsVisible(false);
      if (scrollLeft + containerRef.current.clientWidth > containerRef.current.scrollWidth) {
        setRightArrowIsVisible(false);
      } else setRightArrowIsVisible(true);
    }

    return () => window.removeEventListener("resize", resizeHandler);
  }, [scrollLeft, clientWidth]);

  useEffect(() => {
    const container = containerRef.current;

    function handler(e) {
      e.preventDefault();
      if (e.deltaY > 0 && rightArrowIsVisible) setScrollLeft((n) => n + 90);
      else if (e.deltaY < 0 && leftArrowIsVisible) setScrollLeft((n) => n - 90);
    }

    container.addEventListener("wheel", handler);

    return () => container.removeEventListener("wheel", handler);
  });

  function handleLeftArrowClick() {
    setScrollLeft((n) => n - 90);
  }

  function handleRightArrowClick() {
    setScrollLeft((n) => n + 90);
  }

  return (
    <div className={styles.container} ref={containerRef}>
      {leftArrowIsVisible ? (
        <button className={styles.left_arrow_button} onClick={handleLeftArrowClick}>
          <LeftArrowIcon className={styles.arrow} />
        </button>
      ) : null}

      <FilterButton text="Все" active />
      <FilterButton text="Спорт" />
      <FilterButton text="Наука" />
      <FilterButton text="Кино" />
      <FilterButton text="Музыка" />
      <FilterButton text="Лекции" />
      <FilterButton text="Программирование" />
      <FilterButton text="Путешествия" />
      <FilterButton text="Хоккей" />
      <FilterButton text="Футбол" />
      <FilterButton text="Развлечения" />
      <FilterButton text="Отдых" />
      <FilterButton text="Ремесла" />
      <FilterButton text="Видеоигры" />
      <FilterButton text="Дикая природа" />
      <FilterButton text="Кулинария" />
      <FilterButton text="Изобразительное искусство" />
      <FilterButton text="Дом и ремонт" />

      {rightArrowIsVisible ? (
        <button type="button" className={styles.right_arrow_button} onClick={handleRightArrowClick}>
          <RightArrowIcon className={styles.arrow} />
        </button>
      ) : null}
    </div>
  );
}
