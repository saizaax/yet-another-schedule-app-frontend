import React from "react"
import styles from "@styles/Professor.module.scss"

import { ReactComponent as ArrowIcon } from "@icons/arrow.svg"

import { IconInfo } from "@components/IconInfo"
import { Link } from "react-router-dom"

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
        <div className={styles.card}>
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
        </div>
      ) : null}
    </React.Fragment>
  )
}

export { Professor }
