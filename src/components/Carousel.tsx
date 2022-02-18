import React, { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

export const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(props.images[0])
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images)
      }, 6000)
      return () => clearInterval(interval)
    }
  })

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.2,
        staggerChildren: 0.05,
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.041,
        duration: 2,
      },
    },
  }
  const sentence2 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        delayChildren: 1.4,
        staggerChildren: 0.041,
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 2,
        delayChildren: 0.2,
        staggerChildren: 0.041,
        duration: 2,
      },
    },
  }
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 50,
    },
  }

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

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
  const container2 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0,
        delayChildren: 0,
        staggerChildren: 2,
        duration: 0,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0,
        staggerChildren: 0,
        delayChildren: 0,
        duration: 0,
      },
    },
  }
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
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
      setTimeout(() => {
        setSelectedImage(images[nextIndex])
      }, 1000)
      setTimeout(() => {
        setLoaded(true)
      }, 1500)
      setSelectedIndex(nextIndex)
    }, 0)
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
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={selectedImage.url}
          className="absolute flex"
          style={{
            minHeight: "100vh",
            minWidth: "100%",
            maxHeight: "100vh",
          }}
        >
          <img src={selectedImage.url} className="bg" alt="" />
        </motion.div>
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span
            id="blackOverlay"
            className="absolute w-full h-full bg-black opacity-75"
          ></span>

          <div
            style={{
              minHeight: "100vh",
            }}
            className="relative flex items-center content-center justify-center pt-16 pb-32 "
          >
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
                <AnimatePresence>
                  {loaded && (
                    <>
                      <motion.h3
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        key={selectedImage.title}
                      >
                        {selectedImage.title.split("").map((char, index) => {
                          return (
                            <motion.span
                              className="text-5xl font-semibold text-white"
                              key={char + "-" + index}
                              variants={letter}
                            >
                              {char}
                            </motion.span>
                          )
                        })}
                      </motion.h3>
                      <motion.h3
                        variants={sentence2}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: 2 }}
                        key={selectedImage.description}
                      >
                        {selectedImage.description
                          .split("")
                          .map((char, index) => {
                            return (
                              <motion.span
                                className="mt-4 text-lg text-gray-300"
                                key={char + "-" + index}
                                variants={letter}
                              >
                                {char}
                              </motion.span>
                            )
                          })}
                      </motion.h3>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
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
