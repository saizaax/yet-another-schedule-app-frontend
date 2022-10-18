import React from "react"
import styles from "@styles/pages/MapPage.module.scss"

import { Header } from "@components/Header"
import { Menu } from "@components/Menu"

type Props = {}

const MapPage: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.map}>
            <iframe src="https://ischemes.ru/group/rtu-mirea/vern78" />
          </div>
        </div>
      </div>
    </div>
  )
}

export { MapPage }
