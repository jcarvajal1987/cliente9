import React, { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"

export const Subtitles = () => {
  const [titles, setTitles] = useState([
    "Somos\u00A0Desarrolladores",
    "Somos\u00A0Creativos",
    "Somos\u00A0Visionarios",
    "Somos\u00A0Innovadores",
    "Cuánto\u00A0Más\u00A0puedes\u00A0Ser?",
  ])
  const router = useRouter()

  const [show, setShow] = useState(true)

  const [index, setIndex] = useState(0)

  const activetitle = titles[index]

  useEffect(() => {
    if (router.pathname === "/") {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [router])

  useEffect(() => {
    if (index + 1 === titles.length) {
      const jorge2 = setInterval(() => {
        setIndex(0)
      }, 7000)
      return () => clearInterval(jorge2)
    } else {
      const jorge2 = setInterval(() => {
        setIndex(index + 1)
      }, 7000)
      return () => clearInterval(jorge2)
    }
  }, [index])

  const sentence = {
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.04,
      },
    },
    exit: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.02,
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
      <div className="table w-full m-auto grid">
        <AnimatePresence>
          {show && (
            <motion.h3
              className="flex justify-center m-auto relative-grid md:m-0"
              variants={sentence}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={activetitle}
            >
              {activetitle.split("").map((char, index) => {
                return (
                  <motion.span
                    className="font-medium text-1xl primary lg:text-2xl description01"
                    key={char + "-" + index}
                    variants={letter}
                  >
                    {char}
                  </motion.span>
                )
              })}
            </motion.h3>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
