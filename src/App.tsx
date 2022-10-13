import React from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

import { useAtom } from "jotai"

import { GroupPage } from "@pages/GroupPage"
import { ProfessorsPage } from "@pages/ProfessorsPage"
import { SchedulePage } from "@pages/SchedulePage"
import { MapPage } from "@pages/MapPage"

import { Modals } from "@components/modals/Modals"
import { groupAtom, scheduleParamsAtom } from "@atoms/scheduleAtom"

function App() {
  const [, setGroup] = useAtom(groupAtom)
  const [, setParams] = useAtom(scheduleParamsAtom)

  const fetchLocalStorage = () => {
    const p = localStorage.getItem("schedule-settings")
    const g = localStorage.getItem("schedule-group")

    if (p) setParams(JSON.parse(p))
    if (g) setGroup(g)
  }

  React.useEffect(() => {
    fetchLocalStorage()
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <Modals />
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
