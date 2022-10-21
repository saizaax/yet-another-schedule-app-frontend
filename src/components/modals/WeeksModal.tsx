import React from "react"
import styles from "@styles/modals/WeeksModal.module.scss"
import cn from "classnames"

import { useAtom } from "jotai"

import { weeksPopup } from "@atoms/popupsAtom"
import { getWeeksNumber } from "@utils/getSemesterInfo"

import { Modal } from "@components/Modal"
import { currentWeekAtom } from "@atoms/scheduleAtom"

type Props = {}

const WeeksModal: React.FC<Props> = () => {
  const [week, setWeek] = useAtom(currentWeekAtom)
  const [, setShow] = useAtom(weeksPopup)
  const weeksNumber = getWeeksNumber()

  const weeks = Array.from({ length: weeksNumber }, (_, i) => i + 1).map(
    (item, index) => (
      <button
        key={index}
        className={cn({ [styles.active]: item === week })}
        onClick={() => {
          setWeek(item)
          setShow(false)
        }}
      >
        {("0" + item).slice(-2)}
      </button>
    )
  )

  return (
    <Modal handleClose={() => setShow(false)}>
      <div className={styles.container}>
        <h3>Выбор недели</h3>
        <div className={styles.weeks}>{weeks}</div>
      </div>
    </Modal>
  )
}

export { WeeksModal }
