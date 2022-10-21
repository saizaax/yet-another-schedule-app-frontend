import React from "react"
import styles from "@styles/Break.module.scss"

import { ReactComponent as IntervalIcon } from "@icons/run.svg"
import { ReactComponent as BreakIcon } from "@icons/cup.svg"

import { useAtom } from "jotai"
import { motion } from "framer-motion"

import { scheduleParamsAtom } from "@atoms/scheduleAtom"
import { itemAnimation } from "@animations"

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
          <motion.div className={styles.break} variants={itemAnimation}>
            <BreakIcon width={24} height={24} />
            <p>Перерыв 30 минут</p>
          </motion.div>
        ) : null}
      </React.Fragment>
    )

  return (
    <React.Fragment>
      {params.showEmpty ? (
        <motion.div className={styles.interval} variants={itemAnimation}>
          <IntervalIcon width={24} height={24} />
          <p>
            Окно{hours ? ` ${hours} часа` : ``}
            {minutes ? ` ${minutes} минут` : ``}
          </p>
        </motion.div>
      ) : null}
    </React.Fragment>
  )
}

export { Break }
