import React, { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

export const Titles = () => {
  const titles = ["SKYRIDE", "DESCUBRE", "KYO#"]

  const [index, setIndex] = useState(0)

  const activetitle = titles[index]

  console.log(index)

  useEffect(() => {
    if (index + 1 === titles.length) {
      const jorge2 = setInterval(() => {
        setIndex(0)
      }, 3000)
      return () => clearInterval(jorge2)
    } else {
      const jorge2 = setInterval(() => {
        setIndex(index + 1)
      }, 3000)
      return () => clearInterval(jorge2)
    }
  }, [index])

  const sentence = {
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.05,
      },
    },
    exit: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.05,
      },
    },
  }
  const letter = {
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
    <>
      <div className="table w-full m-auto lg:float-right grid">
        <AnimatePresence>
          <motion.h3
            className="flex justify-end m-auto relative-grid md:m-0"
            variants={sentence}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={activetitle}
          >
            {activetitle.split("").map((char, index) => {
              return (
                <motion.span
                  className="text-6xl font-bold  primary lg:text-7xl"
                  key={char + "-" + index}
                  variants={letter}
                >
                  {char}
                </motion.span>
              )
            })}
          </motion.h3>
        </AnimatePresence>
      </div>
    </>
  )
}
