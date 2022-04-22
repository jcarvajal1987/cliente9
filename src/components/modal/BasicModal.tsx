import React from "react"

import { AnimatePresence, motion } from "framer-motion"

export const BasicModal = (props) => {
  const { show, setShow, title, children, ...rest } = props

  const sentence = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      rotateY: -90,
      transition: {
        duration: 0.4,
      },
    },
  }
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`fixed top-0 left-0 flex flex-wrap items-center justify-center w-full h-full mx-auto `}
          variants={sentence}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div {...rest}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
