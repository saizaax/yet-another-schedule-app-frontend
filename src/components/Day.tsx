import React from "react"
import styles from "@styles/Day.module.scss"

import { BreakType, DayEnum, SubjectType } from "@app-types/schedule.types"

import { Subject } from "@components/Subject"
import { Break } from "@components/Break"
import { Free } from "@components/Free"
import { useAtom } from "jotai"
import { currentWeekAtom, scheduleParamsAtom } from "@atoms/scheduleAtom"
import { getDate } from "@utils/getSemesterInfo"
import { getClasses, getProfessorClasses } from "@utils/getClasses"
import moment from "moment"
import { SubjectSkeleton } from "./skeletons/SubjectSkeleton"

type Props = {
  day: string
  classes: SubjectType[]
  dayValue: DayEnum
  weekType?: "Чётная" | "Нечётная"
  isLoading?: boolean
}

const Day: React.FC<Props> = ({
  day,
  dayValue,
  classes,
  weekType,
  isLoading
}) => {
  const [week] = useAtom(currentWeekAtom)
  const [params] = useAtom(scheduleParamsAtom)

  const date = weekType ? weekType : getDate(week, dayValue)
  const skeletons = Array(3)
    .fill(null)
    .map((i, index) => <SubjectSkeleton key={index} />)

  const subjects = weekType
    ? getProfessorClasses(classes, weekType).map((item) => (
        <Subject key={item.id} {...item} weekType={weekType} />
      ))
    : getClasses(classes, week, date, params.showLate, params.showLectures).map(
        (item: SubjectType | BreakType, index) =>
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
          {date === moment().format("DD.MM.YYYY") ? (
            <div className={styles.active}></div>
          ) : null}
          <p>{day}</p>
        </div>
        <p>{date}</p>
      </div>
      <div className={styles.subjects}>
        {isLoading ? skeletons : subjects.length ? subjects : <Free />}
      </div>
    </div>
  )
}

export { Day }
