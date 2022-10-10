import React from "react"
import styles from "@styles/Tag.module.scss"

import { ReactComponent as LateIcon } from "@icons/late.svg"

type Props = {
  type: "lecture" | "practice" | "late" | "lab" | "index"
  children?: React.ReactNode
}

const Tag: React.FC<Props> = ({ children, type }) => {
  return (
    <React.Fragment>
      {type === "lab" && <span className={styles.lab}>Лабораторная</span>}
      {type === "lecture" && <span className={styles.lecture}>Лекция</span>}
      {type === "practice" && <span className={styles.practice}>Практика</span>}
      {type === "late" && (
        <span className={styles.late}>
          <LateIcon width={16} height={16} />
        </span>
      )}
      {type === "index" && <span className={styles.index}>{children}</span>}
    </React.Fragment>
  )
}

export { Tag }
