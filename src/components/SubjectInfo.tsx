import React from "react"
import styles from "@styles/SubjectInfo.module.scss"

import { ReactComponent as TimeIcon } from "@icons/time-fill.svg"
import { ReactComponent as ProfessorIcon } from "@icons/professor-fill.svg"
import { ReactComponent as LocationIcon } from "@icons/location-fill.svg"

type Props = {
  type: "time" | "professor" | "location"
  children: React.ReactNode
}

const SubjectInfo: React.FC<Props> = ({ type, children }) => {
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
    </React.Fragment>
  )
}

export { SubjectInfo }
