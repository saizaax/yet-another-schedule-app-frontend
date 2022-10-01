import React from "react"
import styles from "@styles/Day.module.scss"

import { Subject } from "@components/Subject"
import { Break } from "@components/Break"
import { Free } from "@components/Free"

type Props = {
  day: string
  date: string
  isActive?: boolean
}

const Day: React.FC<Props> = ({ day, date, isActive }) => {
  return (
    <div className={styles.day}>
      <div className={styles.title}>
        <div className={styles.name}>
          {isActive ? <div className={styles.active}></div> : null}
          <p>{day}</p>
        </div>
        <p>{date}</p>
      </div>
      <div className={styles.subjects}>
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        {/* <Break hours={3} /> */}
        {/* <Free /> */}
      </div>
    </div>
  )
}

export { Day }