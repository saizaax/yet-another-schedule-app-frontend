import React from "react"
import styles from "@styles/Free.module.scss"

type Props = {}

const Free: React.FC<Props> = () => {
  return (
    <div className={styles.free}>
      <h1>😴</h1>
      <div className={styles.text}>
        <h3>Пар нет!</h3>
        <p>Можно спать спокойно</p>
      </div>
    </div>
  )
}

export { Free }