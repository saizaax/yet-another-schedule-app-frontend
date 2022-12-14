import React from "react"
import styles from "@styles/Day.module.scss"
import moment from "moment"

import { AnimatePresence, motion } from "framer-motion"
import { useAtom } from "jotai"
import { v4 as uuid } from "uuid"

import { BreakType, DayEnum, SubjectType } from "@app-types/schedule.types"
import { currentWeekAtom, scheduleParamsAtom } from "@atoms/scheduleAtom"
import { getClasses, getProfessorClasses } from "@utils/getClasses"
import { getDate } from "@utils/getSemesterInfo"

import { containerAnimation } from "@animations"

import { Subject } from "@components/Subject"
import { Break } from "@components/Break"
import { Free } from "@components/Free"
import { SubjectSkeleton } from "@components/skeletons/SubjectSkeleton"

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
    .map((i) => <SubjectSkeleton key={uuid()} />)

  const subjects = weekType
    ? getProfessorClasses(classes, weekType).map((item) => (
        <Subject key={item.id} {...item} weekType={weekType} />
      ))
    : getClasses(classes, week, date, params.showLate, params.showLectures).map(
        (item: SubjectType | BreakType) =>
          item.type === "BREAK" ? (
            <Break key={uuid()} {...item} />
          ) : (
            <Subject key={uuid()} {...item} />
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
      <motion.div
        className={styles.subjects}
        layout
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerAnimation}
      >
        <AnimatePresence mode="wait">
          {isLoading ? skeletons : subjects.length ? subjects : <Free />}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export { Day }
