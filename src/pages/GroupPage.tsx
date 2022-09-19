import React from "react"
import styles from "@styles/GroupPage.module.scss"

import { ReactComponent as GitHubIcon } from "@icons/github.svg"

const GroupPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <h1>Онлайн расписание</h1>
          <p>Просмотр расписания РТУ МИРЭА</p>
        </div>
        <div className={styles.group}>
          <label>👋🏻 Введите вашу учебную группу</label>
          <div className={styles.input}>
            <input type="text" placeholder="ИКБО-01-20" />
            <button>Выбрать</button>
          </div>
        </div>
        <hr />
        <a
          href="https://github.com/saizaax/studify"
          className={styles.contribute}
        >
          <p>Contribute on GitHub</p>
          <GitHubIcon width={20} height={20} />
        </a>
      </div>
    </div>
  )
}

export { GroupPage }
