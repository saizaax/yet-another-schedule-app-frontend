import React from "react"
import styles from "@styles/pages/SchedulePage.module.scss"

import { Navigate } from "react-router-dom"
import { useAtom } from "jotai"

import { useSchedule } from "@api/useSchedule"

import { currentWeekPartAtom, groupAtom } from "@atoms/scheduleAtom"
import { DayEnum } from "@app-types/schedule.types"

import { WeekOverview } from "@components/WeekOverview"
import { Filters } from "@components/Filters"
import { Header } from "@components/Header"
import { Week } from "@components/Week"
import { Menu } from "@components/Menu"
import { Day } from "@components/Day"

const SchedulePage: React.FC = () => {
  const [group] = useAtom(groupAtom)
  const [weekPart] = useAtom(currentWeekPartAtom)

  const { data, isLoading } = useSchedule(group)

  if (!group) return <Navigate to="/" />

  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <div className={styles.inner}>
        <div className={styles.content}>
          <Week />
          <WeekOverview schedule={data?.schedule} isLoading={isLoading} />
          <Filters />
          <div className={styles.schedule}>
            {!weekPart ? (
              <React.Fragment>
                <Day
                  {...data?.schedule[DayEnum.MONDAY]}
                  dayValue={DayEnum.MONDAY}
                  isLoading={isLoading}
                />
                <Day
                  {...data?.schedule[DayEnum.TUESDAY]}
                  dayValue={DayEnum.TUESDAY}
                  isLoading={isLoading}
                />
                <Day
                  {...data?.schedule[DayEnum.WEDNESDAY]}
                  dayValue={DayEnum.WEDNESDAY}
                  isLoading={isLoading}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Day
                  {...data?.schedule[DayEnum.THURSDAY]}
                  dayValue={DayEnum.THURSDAY}
                  isLoading={isLoading}
                />
                <Day
                  {...data?.schedule[DayEnum.FRIDAY]}
                  dayValue={DayEnum.FRIDAY}
                  isLoading={isLoading}
                />
                <Day
                  {...data?.schedule[DayEnum.SATURDAY]}
                  dayValue={DayEnum.SATURDAY}
                  isLoading={isLoading}
                />
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export { SchedulePage }
