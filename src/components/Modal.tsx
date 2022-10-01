import React from "react"
import styles from "@styles/Modal.module.scss"

import { ReactComponent as CloseIcon } from "@icons/close.svg"

type Props = {
  handleClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({ children, handleClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.popup}>
        <button className={styles.close} onClick={handleClose}>
          <CloseIcon width={20} height={20} />
        </button>
        {children}
      </div>
    </div>
  )
}

export { Modal }
