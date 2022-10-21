import React from "react"
import styles from "@styles/Week.module.scss"

import { useAtom } from "jotai"

import { ReactComponent as ArrowIcon } from "@icons/arrow.svg"

import { getSemesterInfo } from "@utils/getSemesterInfo"
import { currentWeekAtom, groupAtom } from "@atoms/scheduleAtom"
import { weeksPopup } from "@atoms/popupsAtom"

const Week: React.FC = () => {
  const [, setShow] = useAtom(weeksPopup)
  const [week] = useAtom(currentWeekAtom)
  const [group] = useAtom(groupAtom)

  const [semesterInfo, setSemesterInfo] = React.useState({
    year: 0,
    semester: 0
  })

  React.useEffect(() => {
    const info = getSemesterInfo(group)
    setSemesterInfo(info)
  }, [group])

  return (
    <div className={styles.container}>
      <p>Курс {semesterInfo.year}</p>
      <span>•</span>
      <p>Семестр {semesterInfo.semester}</p>
      <span>•</span>
      <p>Неделя {week}</p>
      <button onClick={() => setShow(true)}>
        <ArrowIcon width={16} height={16} />
      </button>
    </div>
  )
}

export { Week }
