import React, { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

export const CarouselImage = (props) => {
  const [path, setPath] = useState("transition01")

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 4) + 1
  }

  function defineImgPath(result) {
    switch (result) {
      case 1:
        setPath("transition01")
        break
      case 2:
        setPath("transition02")
        break
      case 3:
        setPath("transition03")
        break
      case 4:
        setPath("transition04")
        break
    }
  }

  const rollDice = () => {
    const result = generateRandomNumber()
    defineImgPath(result)
    console.log(result)
  }
  useEffect(() => {
    rollDice()
  }, [props.props.url])

  console.log(props.props.url)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0,
        delayChildren: 0,
        staggerChildren: 0.3,
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0,
        staggerChildren: 0.2,
        delayChildren: 2,
        duration: 2,
      },
    },
  }
  return (
    <AnimatePresence>
      {props.props
        .filter((img) => img.url === props.stateImage.url)
        .map((img, index) => {
          return (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              key={props.stateImage.url}
              className={`absolute top-0 w-full h-full bg transition ${img.transition}`}
              style={{
                backgroundImage: `url(${img.url})`,
              }}
            ></motion.div>
          )
        })}
    </AnimatePresence>
  )
}
