import React, { FC } from "react"
import styles from "@styles/Spinner.module.scss"

type Props = {
  fullWindow?: boolean
}

const Spinner: FC<Props> = ({ fullWindow = true }) => {
  if (fullWindow)
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
      </div>
    )

  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  )
}

export { Spinner }
