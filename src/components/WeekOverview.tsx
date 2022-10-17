import React from "react"
import styles from "@styles/WeekOverview.module.scss"

import { ReactComponent as ClassesIcon } from "@icons/classes.svg"
import { ReactComponent as LectureIcon } from "@icons/lecture.svg"
import { ReactComponent as PracticeIcon } from "@icons/practice.svg"
import { ReactComponent as TimeIcon } from "@icons/time.svg"
import { ReactComponent as WeekIcon } from "@icons/week.svg"
import { ScheduleType } from "@app-types/schedule.types"
import { useAtom } from "jotai"
import { currentWeekAtom } from "@atoms/scheduleAtom"
import { WeekOverviewSkeleton } from "./skeletons/WeekOverviewSkeleton"

type Props = {
  schedule: ScheduleType
  isLoading: boolean
}

const WeekOverview: React.FC<Props> = ({ schedule, isLoading }) => {
  const [currentWeek] = useAtom(currentWeekAtom)

  const [week, setWeek] = React.useState({
    classes: 0,
    lectures: 0,
    practices: 0,
    hours: 0,
    type: "Чётная"
  })

  React.useEffect(() => {
    if (schedule) {
      const subjects = Object.values(schedule)
        .map((day) => day.classes)
        .flat()
        .filter((item) => item.weeks.includes(currentWeek))

      const classes = subjects.length
      const lectures = subjects.filter((item) => item.type === "Лекция").length
      const practices = subjects.filter(
        (item) => item.type === "Практика"
      ).length
      const hours = subjects.length * 1.5
      const type = currentWeek % 2 === 0 ? "Чётная" : "Нечётная"

      setWeek({ classes, lectures, practices, hours, type })
    }
  }, [schedule])

  if (isLoading) return <WeekOverviewSkeleton />

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
            <span>{week.classes}</span>
          </div>
        </div>
        {/* Practices */}
        {/* <hr /> */}
        <div className={styles.item}>
          <div className={styles.icon}>
            <PracticeIcon width={18} height={18} />
          </div>
          <div className={styles.text}>
            <p>Семинаров</p>
            <hr />
            <span>{week.practices}</span>
          </div>
        </div>
        {/* Lectures */}
        {/* <hr /> */}
        <div className={styles.item}>
          <div className={styles.icon}>
            <LectureIcon width={18} height={18} />
          </div>
          <div className={styles.text}>
            <p>Лекций</p>
            <hr />
            <span>{week.lectures}</span>
          </div>
        </div>
        {/* Hours */}
        {/* <hr /> */}
        <div className={styles.item}>
          <div className={styles.icon}>
            <TimeIcon width={18} height={18} />
          </div>
          <div className={styles.text}>
            <p>Часов</p>
            <hr />
            <span>{week.hours}</span>
          </div>
        </div>
        {/* Week */}
        {/* <hr /> */}
        <div className={styles.item}>
          <div className={styles.icon}>
            <WeekIcon width={18} height={18} />
          </div>
          <div className={styles.text}>
            <p>Неделя</p>
            <hr />
            <span>{week.type}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { WeekOverview }
