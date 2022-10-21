import React from "react"
import styles from "@styles/Subject.module.scss"

import { motion } from "framer-motion"

import { Tag } from "@components/Tag"
import { IconInfo } from "@components/IconInfo"

import { itemAnimation } from "@animations"

type Props = {
  type: "Лекция" | "Практика" | "Лабораторная"
  subject: string
  weeks: number[]
  index: number
  timeStart: string
  timeEnd: string
  location: string
  professor: string
  isLate?: boolean
  weekType?: "Чётная" | "Нечётная"
}

const Subject: React.FC<Props> = ({
  type,
  subject,
  isLate,
  index,
  timeStart,
  timeEnd,
  location,
  professor,
  weeks,
  weekType
}) => {
  return (
    <motion.div className={styles.subject} variants={itemAnimation}>
      {/* Tags */}
      <div className={styles.tags}>
        <div className={styles.container}>
          {/* Type */}
          {type === "Практика" && <Tag type="practice" />}
          {type === "Лекция" && <Tag type="lecture" />}
          {type === "Лабораторная" && <Tag type="lab" />}
          {/* isLate */}
          {isLate && <Tag type="late" />}
        </div>
        {/* Index */}
        <Tag type="index">{index} пара</Tag>
      </div>

      <div className={styles.content}>
        {/* Name */}
        <div className={styles.name}>
          <p>{subject}</p>
        </div>

        {/* Time & Location */}
        <div className={styles.container}>
          <IconInfo type="time">
            {timeStart} – {timeEnd}
          </IconInfo>
          <IconInfo type="location">
            {location ? location : "Неизвестно"}
          </IconInfo>
        </div>
        {/* Professor */}
        {weekType ? null : (
          <IconInfo type="professor">
            {professor ? professor : "Неизвестно"}
          </IconInfo>
        )}
        {/* Weeks */}
        {weekType ? <IconInfo type="week">{weeks.join(" · ")}</IconInfo> : null}
      </div>
    </motion.div>
  )
}

export { Subject }
