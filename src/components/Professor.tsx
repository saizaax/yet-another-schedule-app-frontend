import React from "react"
import styles from "@styles/Professor.module.scss"

import { ReactComponent as ArrowIcon } from "@icons/arrow.svg"

import { IconInfo } from "@components/IconInfo"
import { professorPopup } from "@atoms/popupsAtom"
import { useAtom } from "jotai"

type Props = {}

const Professor: React.FC<Props> = () => {
  const [, setShowProfessorModal] = useAtom(professorPopup)

  return (
    <div className={styles.card}>
      <h3>Иванов И. И.</h3>
      <div className={styles.info}>
        <IconInfo type="location">A310 · A310 · A310 · A310</IconInfo>
        <IconInfo type="time">ПН · ВТ · СР · ЧТ</IconInfo>
      </div>
      <button onClick={() => setShowProfessorModal(true)}>
        Подробнее
        <ArrowIcon width={20} height={20} />
      </button>
    </div>
  )
}

export { Professor }
