import React from "react"
import styles from "@styles/Modal.module.scss"

import { ReactComponent as CloseIcon } from "@icons/close.svg"

type Props = {
  handleClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({ children, handleClose }) => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden"
  }, [])

  const close = () => {
    document.body.style.overflow = "auto"
    handleClose()
  }

  return (
    <div className={styles.modal}>
      <div className={styles.popup}>
        <div className={styles.window}>
          <button className={styles.close} onClick={close}>
            <CloseIcon width={20} height={20} />
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}

export { Modal }
