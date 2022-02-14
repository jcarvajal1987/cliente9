import React, { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

export const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(props.images[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images)
      }, 5000)
      return () => clearInterval(interval)
    }
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0,
        staggerChildren: 0.09,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {},
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0,
      },
    },
  }

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 100)
  }

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, props.images)
  }

  return (
    <>
      {/*<img src={selectedImage} />*/}
      <AnimatePresence>
        <motion.div
          style={{
            backgroundImage: `url(${selectedImage})`,
          }}
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={selectedImage}
          className="absolute top-0 w-full h-full bg-center bg-cover"
        >
          <span
            id="blackOverlay"
            className="absolute w-full h-full bg-black opacity-75"
          ></span>
        </motion.div>
      </AnimatePresence>
      <button style={{ zIndex: 4 }} onClick={previous}>
        {"<"}
      </button>
      <button style={{ zIndex: 4 }} onClick={next}>
        {">"}
      </button>
    </>
  )
}
