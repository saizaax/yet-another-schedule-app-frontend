import React from "react"
import styles from "@styles/Break.module.scss"

import { ReactComponent as IntervalIcon } from "@icons/run.svg"
import { ReactComponent as BreakIcon } from "@icons/cup.svg"
import { useAtom } from "jotai"
import { scheduleParamsAtom } from "@atoms/scheduleAtom"

type Props = {
  hours: number
  minutes: number
}

const Break: React.FC<Props> = ({ hours, minutes }) => {
  const [params] = useAtom(scheduleParamsAtom)

  if (minutes === 30)
    return (
      <React.Fragment>
        {params.showBreaks ? (
          <div className={styles.break}>
            <BreakIcon width={24} height={24} />
            <p>Перерыв 30 минут</p>
          </div>
        ) : null}
      </React.Fragment>
    )

  return (
    <React.Fragment>
      {params.showEmpty ? (
        <div className={styles.interval}>
          <IntervalIcon width={24} height={24} />
          <p>
            Окно{hours ? ` ${hours} часа` : ``}
            {minutes ? ` ${minutes} минут` : ``}
          </p>
        </div>
      ) : null}
    </React.Fragment>
  )
}

export { Break }
