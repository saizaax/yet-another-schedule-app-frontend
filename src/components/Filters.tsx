import React from "react"
import styles from "@styles/Filters.module.scss"

import { Switch } from "@components/Switch"

import { ReactComponent as ArrowRight } from "@icons/chevron-right.svg"
import { ReactComponent as ArrowLeft } from "@icons/chevron-left.svg"

type Props = {}

const Filters: React.FC<Props> = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.container}>
        <div className={styles.item}>
          <p>Скрыть прошедшие пары</p>
          <Switch />
        </div>
        <div className={styles.item}>
          <p>Скрыть лекции</p>
          <Switch />
        </div>
      </div>
      <div className={styles.arrows}>
        <button className={styles.left}>
          <ArrowLeft width={22} height={22} />
        </button>
        <button className={styles.right}>
          <ArrowRight width={22} height={22} />
        </button>
      </div>
    </div>
  )
}

export { Filters }
