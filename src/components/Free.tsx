import React from "react"
import styles from "@styles/Free.module.scss"
import { itemAnimation } from "@animations"
import { motion } from "framer-motion"

type Props = {}

const Free: React.FC<Props> = () => {
  return (
    <motion.div className={styles.free} variants={itemAnimation}>
      <h1>😴</h1>
      <div className={styles.text}>
        <h3>Пар нет!</h3>
        <p>Можно спать спокойно</p>
      </div>
    </motion.div>
  )
}

export { Free }
