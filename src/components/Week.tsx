import React from "react"
import styles from "@styles/Week.module.scss"

type Props = {}

import { ReactComponent as ArrowIcon } from "@icons/arrow.svg"
import { currentWeekAtom, groupAtom } from "@atoms/scheduleAtom"
import { useAtom } from "jotai"
import { getSemesterInfo } from "@utils/getSemesterInfo"

const Week: React.FC<Props> = () => {
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
      <button>
        <ArrowIcon width={16} height={16} />
      </button>
    </div>
  )
}

export { Week }
