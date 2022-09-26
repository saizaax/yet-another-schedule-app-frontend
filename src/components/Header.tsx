import React from "react"
import styles from "@styles/Header.module.scss"

import { ReactComponent as LogoPrimary } from "@assets/logo-primary.svg"

import { ReactComponent as ScheduleIcon } from "@icons/schedule.svg"
import { ReactComponent as ProfessorIcon } from "@icons/professor.svg"
import { ReactComponent as MapIcon } from "@icons/map.svg"
import { ReactComponent as SettingsIcon } from "@icons/settings.svg"

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <LogoPrimary width={40} height={40} />
        </div>

        <nav className={styles.nav}>
          <a>
            <ScheduleIcon />
            Расписание
          </a>
          <a>
            <ProfessorIcon />
            Преподаватели
          </a>
          <a>
            <MapIcon />
            Карта
          </a>
        </nav>

        <div className={styles.settings}>
          <a>
            <SettingsIcon />
            Настройки
          </a>
        </div>
      </div>
    </header>
  )
}

export { Header }
