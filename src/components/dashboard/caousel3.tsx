import React, { useEffect, useState } from "react"

import { CarouselImage } from "./CarouselImage"

export const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedIndexTitle, setSelectedIndexTitle] = useState(0)
  const [selectedIndexDescription, setSelectedIndexDescription] = useState(0)
  const [selectedImage, setSelectedImage] = useState(props.images[0])
  const [selectedTitle, setSelectedTitle] = useState(props.titles[0])
  const [selectedDescription, setSelectedDescription] = useState(
    props.descriptions[0]
  )

  console.log(selectedTitle.title)
  const [loaded, setLoaded] = useState(true)

    useEffect(() => {
      if (props.autoPlay || !props.showButtons) {
        const jorge2 = setInterval(() => {
          selectNewImage(selectedIndex, props.images)
        }, 10000)
        return () => clearInterval(jorge2)
      }
    }, [selectedIndex])

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const jorge = setInterval(() => {
        selectNewTitle(selectedIndexTitle, props.titles)
      }, 18000)
      return () => clearInterval(jorge)
    }
  }, [selectedIndexTitle])

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const jorge = setInterval(() => {
        selectNewDescription(selectedIndexTitle, props.titles)
      }, 5000)
      return () => clearInterval(jorge)
    }
  }, [selectedIndexDescription])

  const selectNewTitle = (index: number, titles: string) => {
    const condition = selectedIndexTitle + 1 === props.titles.length
    const nextIndex = condition ? 0 : selectedIndexTitle + 1
    setSelectedTitle(props.titles[nextIndex])
    setSelectedIndexTitle(nextIndex)
  }

  const selectNewDescription = (index: number, titles: string) => {
    const condition = selectedIndexDescription + 1 === props.descriptions.length
    const nextIndex = condition ? 0 : selectedIndexDescription + 1
    setSelectedDescription(props.descriptions[nextIndex])
    setSelectedIndexDescription(nextIndex)
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
        delayChildren: 1.5,
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
      <div className="relative top-0 flex items-end justify-center w-full h-full sm:items-center">
        {/*<span
          id="blackOverlay"
          className="absolute w-full h-full bg-black opacity-0"
        ></span>*/}

        <div className="container flex flex-wrap mx-auto">
          <div className="flex-wrap block w-full pb-20  sm:pb-0 sm:w-7/12 md:w-6/12">
            <div className="w-full px-4 ml-auto mr-auto text-center grid">
              <div className="table p-2 m-auto bg-white sm:bg-inherit sm:m-0">
                {/*{props.titles
                  .filter((title) => title.title === selectedTitle.title)
                  .map((title, index) => {
                    return (
                      <div
                        key={index}
                        className="table w-full m-auto lg:float-right grid"
                      >
                        <AnimatePresence>
                          <motion.h3
                            className="flex justify-end m-auto relative-grid md:m-0"
                            variants={sentence}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            key={selectedTitle.title}
                          >
                            {title.title.split("").map((char, index) => {
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
                    )
                  })}
                {props.descriptions
                  .filter(
                    (description) =>
                      description.description ===
                      selectedDescription.description
                  )
                  .map((description, index) => {
                    return (
                      <div
                        key={index}
                        className="table m-auto lg:float-right grid"
                      >
                        <AnimatePresence>
                          <motion.h3
                            className="flex justify-end m-auto relative-grid md:m-0"
                            variants={sentence2}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            key={selectedDescription.description}
                          >
                            {description.description
                              .split("")
                              .map((char, index) => {
                                return (
                                  <motion.span
                                    className="block  text-lg text-gray-300  description01 primary"
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
                    )
                  })}*/}
              </div>
            </div>
          </div>
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
