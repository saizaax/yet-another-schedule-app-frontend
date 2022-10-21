import React from "react"
import styles from "@styles/modals/ProfessorModal.module.scss"
import cn from "classnames"

import { useSearchParams } from "react-router-dom"
import { useAtom } from "jotai"

import { DayEnum } from "@app-types/schedule.types"
import { useProfessor } from "@api/useProfessors"
import { professorPopup } from "@atoms/popupsAtom"

import { IconInfo } from "@components/IconInfo"
import { Modal } from "@components/Modal"
import { Day } from "@components/Day"
import { ProfessorModalSkeleton } from "@components/skeletons/ProfessorModalSkeleton"

type Props = {}

const ProfessorModal: React.FC<Props> = () => {
  const [, setShow] = useAtom(professorPopup)
  const [searchParams, setSearchParams] = useSearchParams()
  const [weekType, setWeekType] = React.useState<"Чётная" | "Нечётная">(
    "Нечётная"
  )

  const { data, isLoading, isError } = useProfessor(
    String(searchParams.get("id"))
  )

  const locationsList = data && data.locations ? data.locations.join(" · ") : ""

  const daysList = data
    ? ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]
        .filter((item) => data.days.includes(item))
        .join(" · ")
    : ""

  const handleClose = () => {
    setShow(false)
    setSearchParams({})
  }

  if (isLoading)
    return (
      <Modal handleClose={handleClose}>
        <ProfessorModalSkeleton />
      </Modal>
    )

  return (
    <Modal handleClose={handleClose}>
      {data ? (
        <div className={styles.container}>
          <h3>{data.name}</h3>
          <div className={styles.info}>
            <IconInfo type="location">{locationsList}</IconInfo>
            <IconInfo type="time">{daysList}</IconInfo>
          </div>
          <div className={styles.weeks}>
            <button
              className={cn({ [styles.active]: weekType === "Нечётная" })}
              onClick={() => setWeekType("Нечётная")}
            >
              Нечётная неделя
            </button>
            <button
              className={cn({ [styles.active]: weekType === "Чётная" })}
              onClick={() => setWeekType("Чётная")}
            >
              Чётная неделя
            </button>
          </div>
          <div className={styles.days}>
            {data.schedule.MONDAY.classes.length ? (
              <Day
                {...data.schedule.MONDAY}
                dayValue={DayEnum.MONDAY}
                weekType={weekType}
              />
            ) : null}
            {data.schedule.TUESDAY.classes.length ? (
              <Day
                {...data.schedule.TUESDAY}
                dayValue={DayEnum.TUESDAY}
                weekType={weekType}
              />
            ) : null}
            {data.schedule.WEDNESDAY.classes.length ? (
              <Day
                {...data.schedule.WEDNESDAY}
                dayValue={DayEnum.WEDNESDAY}
                weekType={weekType}
              />
            ) : null}
            {data.schedule.THURSDAY.classes.length ? (
              <Day
                {...data.schedule.THURSDAY}
                dayValue={DayEnum.THURSDAY}
                weekType={weekType}
              />
            ) : null}
            {data.schedule.FRIDAY.classes.length ? (
              <Day
                {...data.schedule.FRIDAY}
                dayValue={DayEnum.FRIDAY}
                weekType={weekType}
              />
            ) : null}
            {data.schedule.SATURDAY.classes.length ? (
              <Day
                {...data.schedule.SATURDAY}
                dayValue={DayEnum.SATURDAY}
                weekType={weekType}
              />
            ) : null}
          </div>
        </div>
      ) : null}
    </Modal>
  )
}

export { ProfessorModal }
