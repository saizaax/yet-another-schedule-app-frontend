import React from "react"
import styles from "@styles/WeekOverview.module.scss"

import { ReactComponent as ClassesIcon } from "@icons/classes.svg"
import { ReactComponent as LectureIcon } from "@icons/lecture.svg"
import { ReactComponent as PracticeIcon } from "@icons/practice.svg"
import { ReactComponent as TimeIcon } from "@icons/time.svg"
import { ReactComponent as WeekIcon } from "@icons/week.svg"

type Props = {}

const WeekOverview: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <p>На этой неделе</p>
      <div className={styles.items}>
        {/* Classes */}
        <div className={styles.item}>
          <div className={styles.icon}>
            <ClassesIcon width={18} height={18} />
          </div>
          <div className={styles.text}>
            <p>Занятий</p>
            <hr />
            <span>12</span>
          </div>
        </div>
        {/* Practices */}
        <hr />
        <div className={styles.item}>
          <div className={styles.icon}>
            <PracticeIcon width={18} height={18} />
          </div>
          <div className={styles.text}>
            <p>Семинаров</p>
            <hr />
            <span>12</span>
          </div>
        </div>
        {/* Lectures */}
        <hr />
        <div className={styles.item}>
          <div className={styles.icon}>
            <LectureIcon width={18} height={18} />
          </div>
          <div className={styles.text}>
            <p>Лекций</p>
            <hr />
            <span>12</span>
          </div>
        </div>
        {/* Hours */}
        <hr />
        <div className={styles.item}>
          <div className={styles.icon}>
            <TimeIcon width={18} height={18} />
          </div>
          <div className={styles.text}>
            <p>Часов</p>
            <hr />
            <span>12</span>
          </div>
        </div>
        {/* Week */}
        <hr />
        <div className={styles.item}>
          <div className={styles.icon}>
            <WeekIcon width={18} height={18} />
          </div>
          <div className={styles.text}>
            <p>Неделя</p>
            <hr />
            <span>Чётная</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { WeekOverview }
