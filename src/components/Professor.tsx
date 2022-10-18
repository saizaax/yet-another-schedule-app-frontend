import React from "react"
import styles from "@styles/Professor.module.scss"

import { ReactComponent as ArrowIcon } from "@icons/arrow.svg"

import { IconInfo } from "@components/IconInfo"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { itemAnimation } from "@animations"

type Props = {
  id: string
  name: string
  locations: string[]
  days: string[]
}

const Professor: React.FC<Props> = ({ id, name, locations, days }) => {
  const locationsList = locations ? locations.slice(0, 3).join(" · ") : ""
  const daysList = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]
    .filter((item) => days.includes(item))
    .join(" · ")

  return (
    <React.Fragment>
      {name ? (
        <motion.div className={styles.card} variants={itemAnimation}>
          <h3>{name}</h3>
          <div className={styles.info}>
            {locationsList ? (
              <IconInfo type="location">{locationsList}</IconInfo>
            ) : null}
            {daysList ? <IconInfo type="time">{daysList}</IconInfo> : null}
          </div>
          <Link to={`/professors?id=${id}`}>
            Подробнее
            <ArrowIcon width={20} height={20} />
          </Link>
        </motion.div>
      ) : null}
    </React.Fragment>
  )
}

export { Professor }
