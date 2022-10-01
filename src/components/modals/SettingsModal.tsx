import React from "react"
import styles from "@styles/modals/SettingsModal.module.scss"
import Switch from "rc-switch"

import { Link, useNavigate } from "react-router-dom"

import { useAtom } from "jotai"
import { settingsPopup } from "@atoms/popupsAtom"

import { Modal } from "@components/Modal"

import { ReactComponent as EditIcon } from "@icons/edit.svg"
import { ReactComponent as GitHubIcon } from "@icons/github.svg"

type Props = {}

const SettingsModal: React.FC<Props> = () => {
  const navigate = useNavigate()
  const [, setShow] = useAtom(settingsPopup)

  const handleGroupChange = () => {
    setShow(false)
    navigate("/")
  }

  return (
    <Modal handleClose={() => setShow(false)}>
      <div className={styles.container}>
        <h3>Настройки</h3>
        <div className={styles.group}>
          <span>Ваша текущая группа</span>
          <div className={styles.name}>
            <p>ИКБО-01-01</p>
            <button onClick={handleGroupChange}>
              <EditIcon width={14} height={14} />
            </button>
          </div>
        </div>
        <div className={styles.settings}>
          <div className={styles.item}>
            <p>Показывать перерывы между парами</p>
            <Switch />
          </div>
          <div className={styles.item}>
            <p>Показывать окна между парами</p>
            <Switch />
          </div>
        </div>
        <a
          href="https://github.com/saizaax/studify"
          className={styles.contribute}
        >
          <p>Contribute on GitHub</p>
          <GitHubIcon width={20} height={20} />
        </a>
      </div>
    </Modal>
  )
}

export { SettingsModal }
