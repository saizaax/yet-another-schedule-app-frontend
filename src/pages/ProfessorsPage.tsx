import React from "react"
import styles from "@styles/pages/ProfessorsPage.module.scss"

import { Header } from "@components/Header"
import { Professor } from "@components/Professor"

import { ReactComponent as SearchIcon } from "@icons/search.svg"

const ProfessorsPage: React.FC = () => {
  return (
    <div className={styles.professors}>
      <Header />
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.search}>
            <input
              type="text"
              name="search"
              placeholder="Поиск преподавателей"
            />
            <SearchIcon width={22} height={22} />
          </div>
          <div className={styles.container}>
            <Professor />
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProfessorsPage }
