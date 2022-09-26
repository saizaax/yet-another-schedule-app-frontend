import React from "react"
import styles from "@styles/Subject.module.scss"

import { ReactComponent as LateIcon } from "@icons/late.svg"
import { ReactComponent as TimeIcon } from "@icons/time-fill.svg"
import { ReactComponent as ProfessorIcon } from "@icons/professor-fill.svg"
import { ReactComponent as LocationIcon } from "@icons/location-fill.svg"

type Props = {}

const Subject: React.FC<Props> = () => {
  return (
    <div className={styles.subject}>
      {/* Tags */}
      <div className={styles.tags}>
        <div className={styles.container}>
          <span className={styles.practice}>Семинар</span>
          {/* <span className={styles.lecture}>Лекция</span> */}
          <span className={styles.late}>
            <LateIcon width={16} height={16} />
          </span>
        </div>
        <span className={styles.index}>2 пара</span>
      </div>

      <div className={styles.content}>
        {/* Name */}
        <div className={styles.name}>
          <p>
            Управление информационно-технологическими проектами
          </p>
        </div>

        {/* Time & Location */}
        <div className={styles.container}>
          <div className={styles.time}>
            <div className={styles.icon}>
              <TimeIcon />
            </div>
            <p>10:40 – 12:10</p>
          </div>
          <div className={styles.location}>
            <div className={styles.icon}>
              <LocationIcon />
            </div>
            <p>A310</p>
          </div>
        </div>
        {/* Professor */}
        <div className={styles.professor}>
          <div className={styles.icon}>
            <ProfessorIcon />
          </div>
          <p>Смоленцева Т. Е.</p>
        </div>
      </div>
    </div>
  )
}

export { Subject }
