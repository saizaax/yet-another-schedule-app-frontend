import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { professorPopup, settingsPopup, weeksPopup } from "@atoms/popupsAtom"
import { useAtom } from "jotai"

import { GroupPage } from "@pages/GroupPage"
import { ProfessorsPage } from "@pages/ProfessorsPage"
import { SchedulePage } from "@pages/SchedulePage"
import { MapPage } from "@pages/MapPage"

import { ProfessorModal } from "@components/modals/ProfessorModal"
import { SettingsModal } from "@components/modals/SettingsModal"
import { WeeksModal } from "@components/modals/WeeksModal"

function App() {
  const [showProfessorModal] = useAtom(professorPopup)
  const [showSettingsModal] = useAtom(settingsPopup)
  const [showWeeksModal] = useAtom(weeksPopup)

  return (
    <div className="app">
      <BrowserRouter>
        {showProfessorModal && <ProfessorModal />}
        {showSettingsModal && <SettingsModal />}
        {showWeeksModal && <WeeksModal />}
        <Routes>
          <Route path="/" element={<GroupPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="professors" element={<ProfessorsPage />} />
          <Route path="map" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
