import React from "react"
import styles from "@styles/pages/ProfessorsPage.module.scss"
import { Header } from "@components/Header"

const ProfessorsPage: React.FC = () => {
  return (
    <div className={styles.professors}>
      <Header />
      <div className={styles.inner}>
        <div className={styles.content}>
          
        </div>
      </div>
    </div>
  )
}

export { ProfessorsPage }