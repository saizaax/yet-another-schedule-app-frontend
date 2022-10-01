import React from "react"
import styles from "@styles/Subject.module.scss"


import { Tag } from "@components/Tag"
import { IconInfo } from "@components/IconInfo"

type Props = {}

const Subject: React.FC<Props> = () => {
  return (
    <div className={styles.subject}>
      {/* Tags */}
      <div className={styles.tags}>
        <div className={styles.container}>
          {/* Type */}
          <Tag type="practice" />
          {/* isLate */}
          <Tag type="late" />
        </div>
        {/* Index */}
        <Tag type="index">2 пара</Tag>
      </div>

      <div className={styles.content}>
        {/* Name */}
        <div className={styles.name}>
          <p>Управление информационно-технологическими проектами</p>
        </div>

        {/* Time & Location */}
        <div className={styles.container}>
          <IconInfo type="time">09:00 – 10:30</IconInfo>
          <IconInfo type="location">A320</IconInfo>
        </div>
        {/* Professor */}
        <IconInfo type="professor">Смоленцева А. А.</IconInfo>
      </div>
    </div>
  )
}

export { Subject }
