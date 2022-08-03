import React from "react";
import styles from "./styles/Menu.module.css";
import MenuLink from "../MenuLink/MenuLink.jsx";
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
import { ReactComponent as MusikIcon } from "./images/music.svg";
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
import MenuSecondaryLink from "../MenuSecondaryLink/MenuSecondaryLink";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list_main}>
        <MenuLink icon={MainIcon} text="Главная" />
        <MenuLink icon={NavigatorIcon} text="Навигатор" />
        <MenuLink icon={ShortsIcon} text="Shorts" />
        <MenuLink icon={SubscribesIcon} text="Подписки" />
        <hr className={styles.horizontal_rule_inner} />
        <MenuLink icon={LibraryIcon} text="Библиотека" />
        <MenuLink icon={HistoryIcon} text="История" />
        <MenuLink icon={YourVideosIcon} text="Ваши видео" />
        <MenuLink icon={WatchLaterIcon} text="Смотреть позже" />
        <MenuLink icon={LikesIcon} text="Понравившиеся" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <h2 className={styles.header}>ПОДПИСКИ</h2>
      <ul className={styles.list_with_header}>
        <MenuLink icon={ReactIcon} text="React" />
        <MenuLink icon={ReduxIcon} text="Redux" />
        <MenuLink icon={WebpackIcon} text="Webpack" />
        <MenuLink icon={MDNIcon} text="MDN" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <h2 className={styles.header}>НАВИГАТОР</h2>
      <ul className={styles.list_with_header}>
        <MenuLink icon={VideosGamesIcon} text="Видеоигры" />
        <MenuLink icon={SportIcon} text="Спорт" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <h2 className={styles.header}>ДРУГИЕ ВОЗМОЖНОСТИ</h2>
      <ul className={styles.list_with_header}>
        <MenuLink icon={StudioIcon} text="Творческая студия" />
        <MenuLink icon={MusikIcon} text="YouTube Music" />
        <MenuLink icon={YTkidsIcon} text="YouTube Детям" />
        <MenuLink icon={YTTVIcon} text="YouTube TV" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <ul className={styles.list_without_header}>
        <MenuLink icon={SettingIcon} text="Настройки" />
        <MenuLink icon={ReportIcon} text="Жалобы" />
        <MenuLink icon={HelpIcon} text="Справка" />
        <MenuLink icon={FeedbackIcon} text="Отправить отзыв" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <ul className={styles.list_secondary}>
        <MenuSecondaryLink text="О сервисе" />
        <MenuSecondaryLink text="Прессе" />
        <MenuSecondaryLink text="Авторские права" />
        <MenuSecondaryLink text="Связаться с нами" />
        <MenuSecondaryLink text="Авторам" />
        <MenuSecondaryLink text="Рекламодателям" />
        <MenuSecondaryLink text="Разработчикам" />
      </ul>
      <ul className={styles.list_secondary}>
        <MenuSecondaryLink text="Условия использования" />
        <MenuSecondaryLink text="Конфиденциальность" />
        <MenuSecondaryLink text="Правила и безопасность" />
        <MenuSecondaryLink text="Как работает YouTube" />
        <MenuSecondaryLink text="Тестировани новых функций" />
      </ul>
      <div className={styles.copyright} aria-hidden="true">
        © Google LLC
      </div>
    </nav>
  );
}
