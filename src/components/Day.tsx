import React from "react"
import styles from "@styles/Day.module.scss"

import { BreakType, DayEnum, SubjectType } from "@app-types/schedule.types"

import { Subject } from "@components/Subject"
import { Break } from "@components/Break"
import { Free } from "@components/Free"
import { useAtom } from "jotai"
import { currentWeekAtom, scheduleParamsAtom } from "@atoms/scheduleAtom"
import { getDate } from "@utils/getSemesterInfo"
import { getClasses } from "@utils/getClasses"

type Props = {
  day: string
  classes: SubjectType[]
  dayValue: DayEnum
}

const Day: React.FC<Props> = ({ day, dayValue, classes }) => {
  const [week] = useAtom(currentWeekAtom)
  const [params] = useAtom(scheduleParamsAtom)

  const date = getDate(week, dayValue)

  const subjects = getClasses(
    classes,
    week,
    date,
    params.showLate,
    params.showLectures
  ).map((item: SubjectType | BreakType, index) =>
    item.type === "BREAK" ? (
      <Break key={index} {...item} />
    ) : (
      <Subject key={item.id} {...item} />
    )
  )

  return (
    <div className={styles.day}>
      <div className={styles.title}>
        <div className={styles.name}>
          {date === new Date().toLocaleString() ? (
            <div className={styles.active}></div>
          ) : null}
          <p>{day}</p>
        </div>
        <p>{date}</p>
      </div>
      <div className={styles.subjects}>
        {subjects && subjects.length ? subjects : <Free />}
      </div>
    </div>
  )
}

export { Day }
