import React from "react"
import { useAtom } from "jotai"

import { professorPopup, settingsPopup, weeksPopup } from "@atoms/popupsAtom"

import { ProfessorModal } from "@components/modals/ProfessorModal"
import { SettingsModal } from "@components/modals/SettingsModal"
import { WeeksModal } from "@components/modals/WeeksModal"

const Modals: React.FC = () => {
  const [showProfessorModal] = useAtom(professorPopup)
  const [showSettingsModal] = useAtom(settingsPopup)
  const [showWeeksModal] = useAtom(weeksPopup)

  return (
    <React.Fragment>
      {showProfessorModal && <ProfessorModal />}
      {showSettingsModal && <SettingsModal />}
      {showWeeksModal && <WeeksModal />}
    </React.Fragment>
  )
}

export { Modals }
