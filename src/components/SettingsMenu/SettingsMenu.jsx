import React, { useEffect, useRef } from "react";
import MenuLink from "../MenuLink/MenuLink";
import styles from "./SettingsMenu.module.css";
import { ReactComponent as MyChannelIcon } from "./images/my_chanel.svg";
import { ReactComponent as CreativeStudioIcon } from "./images/creative_studio.svg";
import { ReactComponent as ChangeAccountIcon } from "./images/change_account.svg";
import { ReactComponent as LogOutIcon } from "./images/logout.svg";
import { ReactComponent as PurchasesIcon } from "./images/purchases.svg";
import { ReactComponent as PersonalDataIcon } from "./images/personal_data.svg";
import { ReactComponent as ThemeIcon } from "./images/theme.svg";
import { ReactComponent as LanguageIcon } from "./images/language.svg";
import { ReactComponent as SafeModeIcon } from "./images/safe_mode.svg";
import { ReactComponent as Country } from "./images/country.svg";
import { ReactComponent as Hotkeys } from "./images/hotkeys.svg";
import { ReactComponent as Settings } from "./images/settings.svg";
import { ReactComponent as Help } from "./images/help.svg";
import { ReactComponent as Feedback } from "./images/feedback.svg";
import { ReactComponent as PersonIcon } from "./images/person.svg";

export default function SettingsMenu({ isOpen, setIsOpen }) {
  const ref = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (!ref.current.contains(e.target)) setIsOpen(false);
    }

    if (ref.current !== null && isOpen === true) {
      document.addEventListener("click", handler);
    }

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isOpen, setIsOpen]);

  return isOpen === true ? (
    <div className={styles.menu} ref={ref}>
      <div className={styles.header}>
        <PersonIcon className={styles.icon} />
        <div>
          <p className={styles.username}>Username</p>
          <a className={styles.link} href="">
            Управление аккантом Google
          </a>
        </div>
      </div>
      <hr className={styles.horizontal_rule} />
      <ul className={styles.list}>
        <MenuLink icon={MyChannelIcon} text="Мой канал" />
        <MenuLink icon={CreativeStudioIcon} text="Творческая студия YouTube" />
        <MenuLink icon={ChangeAccountIcon} text="Сменить Аккаунт" arrow={true} />
        <MenuLink icon={LogOutIcon} text="Выйти" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <ul className={styles.list}>
        <MenuLink icon={PurchasesIcon} text="Покупки и платные подписки" />
        <MenuLink icon={PersonalDataIcon} text="Личные данные на YouTube" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <ul className={styles.list}>
        <MenuLink icon={ThemeIcon} text="Тема: светлая" arrow={true} />
        <MenuLink icon={LanguageIcon} text="Язык: Русский" arrow={true} />
        <MenuLink icon={SafeModeIcon} text="Безопасный режим: откл." arrow={true} />
        <MenuLink icon={Country} text="Страна: Казахстан" arrow={true} />
        <MenuLink icon={Hotkeys} text="Быстрые клавиши" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <ul className={styles.list}>
        <MenuLink icon={Settings} text="Настройки" />
      </ul>
      <hr className={styles.horizontal_rule} />
      <ul className={styles.list}>
        <MenuLink icon={Help} text="Справка" />
        <MenuLink icon={Feedback} text="Отправить отзыв" />
      </ul>
    </div>
  ) : null;
}
