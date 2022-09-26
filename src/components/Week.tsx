import React from "react"
import styles from "@styles/Week.module.scss"

type Props = {}

import { ReactComponent as ArrowIcon } from "@icons/arrow.svg"

const Week: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <p>Курс 2</p>
      <span>•</span>
      <p>Семестр 4</p>
      <span>•</span>
      <p>Неделя 4</p>
      <button>
        <ArrowIcon width={16} height={16} />
      </button>
    </div>
  )
}

export { Week }
