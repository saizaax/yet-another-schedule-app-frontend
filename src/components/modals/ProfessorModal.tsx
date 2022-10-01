import React from "react"
import styles from "@styles/modals/ProfessorModal.module.scss"

import { useAtom } from "jotai"
import { professorPopup } from "@atoms/popupsAtom"

import { IconInfo } from "@components/IconInfo"
import { Day } from "@components/Day"
import { Modal } from "@components/Modal"

type Props = {}

const ProfessorModal: React.FC<Props> = () => {
  const [, setShow] = useAtom(professorPopup)

  return (
    <Modal handleClose={() => setShow(false)}>
      <div className={styles.container}>
        <h3>Иванов И. И.</h3>
        <div className={styles.info}>
          <IconInfo type="location">A310 · A420 · A332</IconInfo>
          <IconInfo type="time">ПН · ВТ · СР · ЧТ</IconInfo>
        </div>
        <div className={styles.weeks}>
          <button className={styles.active}>Нечётная неделя</button>
          <button>Чётная неделя</button>
        </div>
        <div className={styles.days}>
          <Day date="Нечётная неделя" day="Понедельник" />
          <Day date="Нечётная неделя" day="Понедельник" />
          <Day date="Нечётная неделя" day="Понедельник" />
        </div>
      </div>
    </Modal>
  )
}

export { ProfessorModal }
