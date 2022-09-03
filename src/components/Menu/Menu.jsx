import React from "react";
import styles from "./Menu.module.css";
import MainMenuLink from "../MainMenuLink/MainMenuLink.jsx";
import MainMenuSecondaryLink from "../MainMenuSecondaryLink/MainMenuSecondaryLink";
import { ReactComponent as MainIcon } from "./images/main.svg";
import { ReactComponent as NavigatorIcon } from "./images/navigator.svg";
import { ReactComponent as ShortsIcon } from "./images/shorts.svg";
import { ReactComponent as SubscribesIcon } from "./images/subscribes.svg";
import { ReactComponent as LibraryIcon } from "./images/library.svg";
import { ReactComponent as HistoryIcon } from "./images/history.svg";
import { ReactComponent as YourVideosIcon } from "./images/your_videos.svg";
import { ReactComponent as WatchLaterIcon } from "./images/watch_later.svg";
import { ReactComponent as LikesIcon } from "./images/likes.svg";
import { ReactComponent as VideosGamesIcon } from "./images/video_games.svg";
import { ReactComponent as SportIcon } from "./images/sport.svg";
import { ReactComponent as StudioIcon } from "./images/studio.svg";
import { ReactComponent as MusicIcon } from "./images/music.svg";
import { ReactComponent as YTkidsIcon } from "./images/YTkids.svg";
import { ReactComponent as YTTVIcon } from "./images/YTTV.svg";
import { ReactComponent as SettingIcon } from "./images/settings.svg";
import { ReactComponent as ReportIcon } from "./images/report.svg";
import { ReactComponent as HelpIcon } from "./images/help.svg";
import { ReactComponent as FeedbackIcon } from "./images/feedback.svg";
import { ReactComponent as ReactIcon } from "./images/react.svg";
import { ReactComponent as ReduxIcon } from "./images/redux.svg";
import { ReactComponent as WebpackIcon } from "./images/webpack.svg";
import { ReactComponent as MDNIcon } from "./images/mdn.svg";

export default function Menu({ isOpen }) {
  const shrinked = (
    <nav className={styles.menu_shrinked}>
      <ul className={styles.list_shrinked} aria-label="Основные ссылки">
        <MainMenuLink icon={MainIcon} text="Главная" shrinked={true} />
        <MainMenuLink icon={NavigatorIcon} text="Навигатор" shrinked={true} />
        <MainMenuLink icon={ShortsIcon} text="Shorts" shrinked={true} />
        <MainMenuLink icon={SubscribesIcon} text="Подписки" shrinked={true} />
        <MainMenuLink icon={LibraryIcon} text="Библиотека" shrinked={true} />
      </ul>
    </nav>
  );

  const expanded = (
    <nav className={styles.menu_expanded}>
      <ul className={styles.list_main} aria-label="Основные ссылки">
        <MainMenuLink icon={MainIcon} text="Главная" />
        <MainMenuLink icon={NavigatorIcon} text="Навигатор" />
        <MainMenuLink icon={ShortsIcon} text="Shorts" />
        <MainMenuLink icon={SubscribesIcon} text="Подписки" />
        <hr className={styles.horizontal_rule_inner} />
        <MainMenuLink icon={LibraryIcon} text="Библиотека" />
        <MainMenuLink icon={HistoryIcon} text="История" />
        <MainMenuLink icon={YourVideosIcon} text="Ваши видео" />
        <MainMenuLink icon={WatchLaterIcon} text="Смотреть позже" />
        <MainMenuLink icon={LikesIcon} text="Понравившиеся" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <h2 className={styles.header} id="subscribes">
        ПОДПИСКИ
      </h2>
      <ul className={styles.list_with_header} aria-labelledby="subscribes">
        <MainMenuLink icon={ReactIcon} text="React" />
        <MainMenuLink icon={ReduxIcon} text="Redux" />
        <MainMenuLink icon={WebpackIcon} text="Webpack" />
        <MainMenuLink icon={MDNIcon} text="MDN" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <h2 className={styles.header} id="navigator">
        НАВИГАТОР
      </h2>
      <ul className={styles.list_with_header} aria-labelledby="navigator">
        <MainMenuLink icon={VideosGamesIcon} text="Видеоигры" />
        <MainMenuLink icon={SportIcon} text="Спорт" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <h2 className={styles.header} id="other">
        ДРУГИЕ ВОЗМОЖНОСТИ
      </h2>
      <ul className={styles.list_with_header} aria-labelledby="other">
        <MainMenuLink icon={StudioIcon} text="Творческая студия" />
        <MainMenuLink icon={MusicIcon} text="YouTube Music" />
        <MainMenuLink icon={YTkidsIcon} text="YouTube Детям" />
        <MainMenuLink icon={YTTVIcon} text="YouTube TV" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <ul className={styles.list_without_header}>
        <MainMenuLink icon={SettingIcon} text="Настройки" />
        <MainMenuLink icon={ReportIcon} text="Жалобы" />
        <MainMenuLink icon={HelpIcon} text="Справка" />
        <MainMenuLink icon={FeedbackIcon} text="Отправить отзыв" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <ul className={styles.list_secondary}>
        <MainMenuSecondaryLink text="О сервисе" />
        <MainMenuSecondaryLink text="Прессе" />
        <MainMenuSecondaryLink text="Авторские права" />
        <MainMenuSecondaryLink text="Связаться с нами" />
        <MainMenuSecondaryLink text="Авторам" />
        <MainMenuSecondaryLink text="Рекламодателям" />
        <MainMenuSecondaryLink text="Разработчикам" />
      </ul>
      <ul className={styles.list_secondary}>
        <MainMenuSecondaryLink text="Условия использования" />
        <MainMenuSecondaryLink text="Конфиденциальность" />
        <MainMenuSecondaryLink text="Правила и безопасность" />
        <MainMenuSecondaryLink text="Как работает YouTube" />
        <MainMenuSecondaryLink text="Тестирование новых функций" />
      </ul>
      <div className={styles.copyright} aria-hidden="true">
        © Google LLC
      </div>
    </nav>
  );

  if (isOpen) return expanded;
  else return shrinked;
}
