import React from "react"
import styles from "@styles/Selector.module.scss"

import { modalAnimation } from "@animations"
import { motion } from "framer-motion"

type Props = {
  onChange: (value: string) => void
  isOpen: boolean
  variants: string[]
}

const Selector: React.FC<Props> = ({ onChange, isOpen, variants }) => {
  const handleChange = (value: string) => {
    if (onChange) onChange(value)
  }

  const items = variants
    ? variants.map((item, index) => (
        <button
          key={index}
          className={styles.item}
          onMouseDown={() => handleChange(item)}
        >
          {item}
        </button>
      ))
    : null

  return (
    <React.Fragment>
      {isOpen ? (
        <motion.div className={styles.selector} {...modalAnimation}>
          {items && items.length ? items : null}
        </motion.div>
      ) : null}
    </React.Fragment>
  )
}

export { Selector }
