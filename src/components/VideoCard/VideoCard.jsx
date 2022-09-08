import React from "react";
import { ReactComponent as ImageIcon } from "./images/image.svg";
import { ReactComponent as ChannelIcon } from "./images/channel.svg";
import styles from "./VideoCard.module.css";

export default function VideoCard() {
  return (
    <a href="#" className={styles.card}>
      <div className={styles.thumbnail}>
        <ImageIcon className={styles.thumbnail_icon} />
      </div>
      <div className={styles.info}>
        <ChannelIcon className={styles.channel_icon} />
        <div className={styles.text_block}>
          <p className={styles.video_name}>Название видео</p>
          <a href="" className={styles.small_text}>
            Название канала
          </a>
          <p className={styles.small_text}>Количество просмотров</p>
          <p className={styles.small_text}>n времени назад</p>
        </div>
      </div>
    </a>
  );
}
