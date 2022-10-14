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

const SchedulePage: React.FC = () => {
  const [group] = useAtom(groupAtom)
  const [weekPart] = useAtom(currentWeekPartAtom)

  const navigate = useNavigate()

  const { data, isLoading, isError } = useSchedule(group)

  if (isLoading) return <Spinner />

  if (!group) return <Navigate to="/" />

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.inner}>
        <div className={styles.content}>
          <Week />
          {data ? <WeekOverview schedule={data.schedule} /> : null}
          <Filters />
          {data ? (
            <div className={styles.schedule}>
              {!weekPart ? (
                <React.Fragment>
                  <Day {...data.schedule.MONDAY} dayValue={DayEnum.MONDAY} />
                  <Day {...data.schedule.TUESDAY} dayValue={DayEnum.TUESDAY} />
                  <Day
                    {...data.schedule.WEDNESDAY}
                    dayValue={DayEnum.WEDNESDAY}
                  />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Day
                    {...data.schedule.THURSDAY}
                    dayValue={DayEnum.THURSDAY}
                  />
                  <Day {...data.schedule.FRIDAY} dayValue={DayEnum.FRIDAY} />
                  <Day
                    {...data.schedule.SATURDAY}
                    dayValue={DayEnum.SATURDAY}
                  />
                </React.Fragment>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export { SchedulePage }
