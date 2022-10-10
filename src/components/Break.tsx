import React from "react"
import styles from "@styles/Break.module.scss"

import { ReactComponent as IntervalIcon } from "@icons/run.svg"
import { ReactComponent as BreakIcon } from "@icons/cup.svg"

type Props = {
  hours: number
  minutes: number
}

const Break: React.FC<Props> = ({ hours, minutes }) => {
  return (
    <React.Fragment>
      {minutes === 30 ? (
        <div className={styles.break}>
          <BreakIcon width={24} height={24} />
          <p>Перерыв 30 минут</p>
        </div>
      ) : (
        <div className={styles.interval}>
          <IntervalIcon width={24} height={24} />
          <p>
            Окно{hours ? ` ${hours} часа` : ``}
            {minutes ? ` ${minutes} минут` : ``}
          </p>
        </div>
      )}
    </React.Fragment>
  )
}

export { Break }
