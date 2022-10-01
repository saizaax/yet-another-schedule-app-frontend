import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { professorPopup, settingsPopup } from "@atoms/popupsAtom"
import { useAtom } from "jotai"

import { GroupPage } from "@pages/GroupPage"
import { ProfessorsPage } from "@pages/ProfessorsPage"
import { SchedulePage } from "@pages/SchedulePage"
import { MapPage } from "@pages/MapPage"

import { ProfessorModal } from "@components/modals/ProfessorModal"
import { SettingsModal } from "@components/modals/SettingsModal"

function App() {
  const [showProfessorModal] = useAtom(professorPopup)
  const [showSettingsModal] = useAtom(settingsPopup)

  return (
    <div className="app">
      <BrowserRouter>
        {showProfessorModal && <ProfessorModal />}
        {showSettingsModal && <SettingsModal />}
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
