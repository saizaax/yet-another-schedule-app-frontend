import React from "react"
import styles from "@styles/Empty.module.scss"

const Empty: React.FC = () => {
  return (
    <div className={styles.empty}>
      <h1>😢</h1>
      <div className={styles.text}>
        <h3>Мы не смогли ничего найти!</h3>
        <p>Попробуйте еще раз</p>
      </div>
    </div>
  )
}

export { Empty }
