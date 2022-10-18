import React from "react"
import styles from "@styles/Modal.module.scss"

import { ReactComponent as CloseIcon } from "@icons/close.svg"
import { motion } from "framer-motion"
import { modalAnimation } from "@animations"

type Props = {
  handleClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({ children, handleClose }) => {
  const close = () => {
    document.body.style.overflow = "auto"
    handleClose()
  }

  React.useEffect(() => {
    document.body.style.overflow = "hidden"

    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
    }

    document.addEventListener("keydown", keyDownHandler)

    return () => document.removeEventListener("keydown", keyDownHandler)
  }, [])

  return (
    <div className={styles.modal}>
      <motion.div className={styles.popup} {...modalAnimation}>
        <div className={styles.window}>
          <button className={styles.close} onClick={close}>
            <CloseIcon width={20} height={20} />
          </button>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export { Modal }
