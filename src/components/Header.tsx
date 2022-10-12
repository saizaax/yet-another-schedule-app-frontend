import React from "react"
import styles from "@styles/Header.module.scss"
import cn from "classnames"

import { Link, useLocation } from "react-router-dom"

import { ReactComponent as LogoPrimary } from "@assets/logo-primary.svg"
import { ReactComponent as ScheduleIcon } from "@icons/schedule.svg"
import { ReactComponent as ProfessorIcon } from "@icons/professor.svg"
import { ReactComponent as MapIcon } from "@icons/map.svg"
import { ReactComponent as SettingsIcon } from "@icons/settings.svg"
import { settingsPopup } from "@atoms/popupsAtom"
import { useAtom } from "jotai"

const Header: React.FC = () => {
  const location = useLocation()
  const [tab, setTab] = React.useState(location.pathname)

  const [, setShowSettings] = useAtom(settingsPopup)

  React.useEffect(() => {
    setTab(location.pathname)
  }, [location])

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to="/">
            <LogoPrimary width={40} height={40} />
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link
            to="/schedule"
            className={cn({ [styles.active]: tab === "/schedule" })}
          >
            <ScheduleIcon />
            Расписание
          </Link>
          <Link
            to="/professors"
            className={cn({ [styles.active]: tab === "/professors" })}
          >
            <ProfessorIcon />
            Преподаватели
          </Link>
          <Link to="/map" className={cn({ [styles.active]: tab === "/map" })}>
            <MapIcon />
            Карта
          </Link>
        </nav>

        <div className={styles.settings}>
          <button onClick={() => setShowSettings(true)}>
            <SettingsIcon />
            Настройки
          </button>
        </div>
      </div>
    </header>
  )
}

export { Header }
