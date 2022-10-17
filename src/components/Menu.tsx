import React from "react"
import styles from "@styles/Menu.module.scss"
import cn from "classnames"

import { ReactComponent as ScheduleIcon } from "@icons/schedule.svg"
import { ReactComponent as ProfessorIcon } from "@icons/professor.svg"
import { ReactComponent as MapIcon } from "@icons/map.svg"
import { ReactComponent as SettingsIcon } from "@icons/settings.svg"

import { Link, useLocation } from "react-router-dom"
import { settingsPopup } from "@atoms/popupsAtom"
import { useAtom } from "jotai"

type Props = {}

const Menu: React.FC<Props> = () => {
  const location = useLocation()
  const [tab, setTab] = React.useState(location.pathname)

  const [, setShowSettings] = useAtom(settingsPopup)

  React.useEffect(() => {
    setTab(location.pathname)
  }, [location])

  return (
    <div className={styles.menu}>
      <nav className={styles.nav}>
        <Link
          to="/schedule"
          className={cn({ [styles.active]: tab === "/schedule" })}
        >
          <ScheduleIcon />
        </Link>
        <Link
          to="/professors"
          className={cn({ [styles.active]: tab === "/professors" })}
        >
          <ProfessorIcon />
        </Link>
        <Link to="/map" className={cn({ [styles.active]: tab === "/map" })}>
          <MapIcon />
        </Link>
        <button onClick={() => setShowSettings(true)}>
          <SettingsIcon />
        </button>
      </nav>
    </div>
  )
}

export { Menu }
