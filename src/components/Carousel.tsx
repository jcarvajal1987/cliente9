import React, { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

import { CarouselImage } from "./CarouselImage"

export const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedIndexTitle, setSelectedIndexTitle] = useState(0)
  const [selectedImage, setSelectedImage] = useState(props.images[0])
  const [selectedTitle, setSelectedTitle] = useState(props.titles[0])
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const jorge2 = setInterval(() => {
        selectNewImage(selectedIndex, props.images)
      }, 5000)
      return () => clearInterval(jorge2)
    }
  }, [selectedIndex])

  useEffect(() => {
    const jorge = setInterval(() => {
      selectNewTitle(selectedIndexTitle, props.titles)
    }, 4000)
    return () => clearInterval(jorge)
  }, [selectedIndexTitle])

  const selectNewTitle = (index: number, titles: string) => {
    const condition = selectedIndexTitle + 1 === props.titles.length
    const nextIndex = condition ? 0 : selectedIndexTitle + 1
    setSelectedTitle(props.titles[nextIndex])
    setSelectedIndexTitle(nextIndex)
  }

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
  const sentence2 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.2,
        staggerChildren: 0.041,
        duration: 2,
      },
    },
    exit: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
        duration: 2,
      },
    },
  }
  const letter = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
    },
    exit: {
      opacity: 0,
      rotateY: -90,
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
      }, 500)
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

      <CarouselImage props={props.images} stateImage={selectedImage} />
      <div className="relative top-0 flex items-center justify-center w-full h-full">
        <span
          id="blackOverlay"
          className="absolute w-full h-full bg-black opacity-0"
        ></span>

        <div className="container flex flex-wrap mx-auto">
          <div className="flex-wrap block mitad1">
            <div className="w-full px-4 ml-auto mr-auto text-center grid">
              <AnimatePresence>
                {props.titles
                  .filter((title) => title.title === selectedTitle.title)
                  .map((title, index) => {
                    return (
                      <motion.h3
                        className="relative flex justify-end"
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        key={selectedTitle.title}
                      >
                        {title.title.split("").map((char, index) => {
                          return (
                            <motion.span
                              className=" text-5xl font-semibold primary title01"
                              key={char + "-" + index}
                              variants={letter}
                            >
                              {char}
                            </motion.span>
                          )
                        })}
                      </motion.h3>
                    )
                  })}

                {/*<motion.h3
                    variants={sentence2}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key={selectedImage.description}
                    className="flex justify-end"
                  >
                    {selectedImage.description.split("").map((char, index) => {
                      return (
                        <motion.span
                          className="block mt-4 text-lg text-gray-300  description01 primary"
                          key={char + "-" + index}
                          variants={letter}
                        >
                          {char}
                        </motion.span>
                      )
                    })}
                  </motion.h3>*/}
              </AnimatePresence>
            </div>
          </div>
          <div className="mitad2"> jorge</div>
        </div>
      </div>

      <button style={{ zIndex: 4 }} onClick={previous}>
        {"<"}
      </button>
      <button style={{ zIndex: 4 }} onClick={next}>
        {">"}
      </button>
    </>
  )
}
