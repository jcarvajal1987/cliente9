import React from "react"

import { motion } from "framer-motion"

export const FormLayout = ({ children }) => {
  const Layout = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,

      transition: {
        duration: 0.4,
      },
    },
  }
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        delay: 0.7,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,

      transition: {
        duration: 0.4,
      },
    },
  }
  return (
    <motion.main
      className="overflow-hidden relative-grid grid"
      variants={Layout}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={3}
    >
      <section className="items-center overflow-auto grid">
        <div className="container mx-auto">
          <div className="flex justify-center sm:pb-0 sm:w-7/12 md:w-6/12">
            {children}
          </div>
        </div>
      </section>
    </motion.main>
  )
}
