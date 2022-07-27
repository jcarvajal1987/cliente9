import React from "react"

import { motion } from "framer-motion"

import SideBar from "@components/SideBar"

import { Content } from "./Content"

export default function Dasboard() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
        delayChildren: 1,
        staggerChildren: 0.09,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0,
        staggerChildren: 0.09,
        duration: 0.3,
      },
    },
  }
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
  }
  return (
    <>
      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        key={2}
        className="overflow-hidden relative-grid grid"
      >
        <div className="overflow-hidden grid container-dashboard">
          <div className="menu-dashboard">
            <SideBar />
          </div>
          <div className="overflow-hidden content-dashboard grid">
            <Content />
          </div>

          {/*<Sidebar />*/}
          {/*<SideBar />
          <Content />*/}
        </div>
      </motion.main>
    </>
  )
}
