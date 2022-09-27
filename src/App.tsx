import { BrowserRouter, Route, Routes } from "react-router-dom"

import { GroupPage } from "@pages/GroupPage"
import { ProfessorsPage } from "@pages/ProfessorsPage"
import { SchedulePage } from "@pages/SchedulePage"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<GroupPage />} />
          <Route path="schedule" element={<SchedulePage />} /> 
          <Route path="professors" element={<ProfessorsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
