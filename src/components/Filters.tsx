import React from "react"
import styles from "@styles/Filters.module.scss"

import { Switch } from "@components/Switch"

import { ReactComponent as ArrowRight } from "@icons/chevron-right.svg"
import { ReactComponent as ArrowLeft } from "@icons/chevron-left.svg"
import { useAtom } from "jotai"
import {
  currentWeekAtom,
  currentWeekPartAtom,
  scheduleParamsAtom
} from "@atoms/scheduleAtom"
import { getWeeksNumber } from "@utils/getSemesterInfo"

const Filters: React.FC = () => {
  const [week, setWeek] = useAtom(currentWeekAtom)
  const [weekPart, setWeekPart] = useAtom(currentWeekPartAtom)
  const [params, setParams] = useAtom(scheduleParamsAtom)

  const maxWeeks = getWeeksNumber()

  const handleWeekChange = (type: "BACK" | "FORWARD") => {
    setWeekPart(!weekPart)
    if (type === "BACK" && !weekPart && week > 0) setWeek(week - 1)
    if (type === "FORWARD" && weekPart && week <= maxWeeks) setWeek(week + 1)
  }

  const handleParamsChange = (type: "showLate" | "showLectures") => {
    const p = { ...params, [type]: !params[type] }
    setParams(p)
    localStorage.setItem("schedule-settings", JSON.stringify(p))
  }

  React.useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleWeekChange("FORWARD")
      if (event.key === "ArrowLeft") handleWeekChange("BACK")
    }

    document.addEventListener("keydown", keyDownHandler)

    return () => document.removeEventListener("keydown", keyDownHandler)
  }, [handleWeekChange])

  return (
    <div className={styles.filters}>
      <div className={styles.container}>
        <div className={styles.item}>
          <p>Прошедшие пары</p>
          <Switch
            checked={params.showLate}
            onChange={() => handleParamsChange("showLate")}
          />
        </div>
        <div className={styles.item}>
          <p>Лекции</p>
          <Switch
            checked={params.showLectures}
            onChange={() => handleParamsChange("showLectures")}
          />
        </div>
      </div>
      <div className={styles.arrows}>
        <button
          className={styles.left}
          onClick={() => handleWeekChange("BACK")}
          disabled={!weekPart && week === 1}
        >
          <ArrowLeft width={22} height={22} />
        </button>
        <button
          className={styles.right}
          onClick={() => handleWeekChange("FORWARD")}
          disabled={weekPart && week === maxWeeks}
        >
          <ArrowRight width={22} height={22} />
        </button>
      </div>
    </div>
  )
}

export { Filters }
