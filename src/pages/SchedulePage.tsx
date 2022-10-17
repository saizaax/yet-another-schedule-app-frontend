import React from "react"
import styles from "@styles/pages/SchedulePage.module.scss"

import { useSchedule } from "@api/useSchedule"

import { Header } from "@components/Header"
import { WeekOverview } from "@components/WeekOverview"
import { Week } from "@components/Week"
import { Filters } from "@components/Filters"
import { Day } from "@components/Day"
import { useAtom } from "jotai"
import { currentWeekPartAtom, groupAtom } from "@atoms/scheduleAtom"
import { DayEnum } from "@app-types/schedule.types"
import { Navigate, useNavigate } from "react-router-dom"
import { Spinner } from "@components/Spinner"
import { Menu } from "@components/Menu"

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
