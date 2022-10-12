import React from "react"
import styles from "@styles/IconInfo.module.scss"

import { ReactComponent as TimeIcon } from "@icons/time-fill.svg"
import { ReactComponent as ProfessorIcon } from "@icons/professor-fill.svg"
import { ReactComponent as LocationIcon } from "@icons/location-fill.svg"
import { ReactComponent as WeekIcon } from "@icons/week-fill.svg"

type Props = {
  type: "time" | "professor" | "location" | "week"
  children: React.ReactNode
}

const IconInfo: React.FC<Props> = ({ type, children }) => {
  return (
    <React.Fragment>
      {type === "time" && (
        <div className={styles.time}>
          <div className={styles.icon}>
            <TimeIcon />
          </div>
          <p>{children}</p>
        </div>
      )}
      {type === "professor" && (
        <div className={styles.professor}>
          <div className={styles.icon}>
            <ProfessorIcon />
          </div>
          <p>{children}</p>
        </div>
      )}
      {type === "location" && (
        <div className={styles.location}>
          <div className={styles.icon}>
            <LocationIcon />
          </div>
          <p>{children}</p>
        </div>
      )}
      {type === "week" && (
        <div className={styles.professor}>
          <div className={styles.icon}>
            <WeekIcon />
          </div>
          <p>{children}</p>
        </div>
      )}
    </React.Fragment>
  )
}

export { IconInfo }
