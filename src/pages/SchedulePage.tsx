import React from "react"
import styles from "@styles/pages/SchedulePage.module.scss"

import { Header } from "@components/Header"
import { WeekOverview } from "@components/WeekOverview"
import { Week } from "@components/Week"
import { Filters } from "@components/Filters"
import { Day } from "@components/Day"

const SchedulePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.inner}>
        <div className={styles.content}>
          <Week />
          <WeekOverview />
          <Filters />
          <div className={styles.schedule}>
            <Day day="Понедельник" date="26.09.2022" isActive={true} />
            <Day day="Вторник" date="27.09.2022" />
            <Day day="Среда" date="28.09.2022" />
          </div>
        </div>
      </div>
    </div>
  )
}

export { SchedulePage }
