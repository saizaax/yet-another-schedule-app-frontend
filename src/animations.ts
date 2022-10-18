import { AnimationProps, Variants } from "framer-motion"

export const containerAnimation: Variants = {
  hidden: {
    opacity: 1,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.03
    }
  },
  exit: {}
}

export const itemAnimation: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
  exit: { y: -20, opacity: 0 }
}

export const modalAnimation: AnimationProps = {
  initial: { y: -30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20
  }
}
