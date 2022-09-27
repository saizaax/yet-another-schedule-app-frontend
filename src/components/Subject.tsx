import React from "react"
import styles from "@styles/Subject.module.scss"


import { SubjectTag } from "@components/SubjectTag"
import { SubjectInfo } from "./SubjectInfo"

type Props = {}

const Subject: React.FC<Props> = () => {
  return (
    <div className={styles.subject}>
      {/* Tags */}
      <div className={styles.tags}>
        <div className={styles.container}>
          {/* Type */}
          <SubjectTag type="practice" />
          {/* isLate */}
          <SubjectTag type="late" />
        </div>
        {/* Index */}
        <SubjectTag type="index">2 пара</SubjectTag>
      </div>

      <div className={styles.content}>
        {/* Name */}
        <div className={styles.name}>
          <p>Управление информационно-технологическими проектами</p>
        </div>

        {/* Time & Location */}
        <div className={styles.container}>
          <SubjectInfo type="time">09:00 – 10:30</SubjectInfo>
          <SubjectInfo type="location">A320</SubjectInfo>
        </div>
        {/* Professor */}
        <SubjectInfo type="professor">Смоленцева А. А.</SubjectInfo>
      </div>
    </div>
  )
}

export { Subject }
