import React from "react"

import { Subtitles } from "./landing/Subtitles"
import { Titles } from "./landing/Titles"

export const Carousel = (props) => {
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

  return (
    <>
      <div className="relative top-0 flex items-end justify-center w-full h-full sm:items-center">
        <div className="flex flex-col flex-auto">
          <div
            className="w-full sm:hidden "
            //style={{
            //  backgroundImage: `url(./layer-movil.svg)`,
            //  height: `auto`,
            //}}
          >
            <img
              style={{ width: 100 + "%", height: "auto" }}
              className=""
              src="./layer-movil.svg"
            />
          </div>
          {/*<span
          id="blackOverlay"
          className="absolute w-full h-full bg-black opacity-0"
        ></span>*/}

          <div className="container z-10 flex flex-wrap mx-auto">
            <div className="flex-wrap block w-full pb-5 bg-white sm:bg-transparent sm:pb-10 sm:w-7/12 md:w-6/12">
              <div className="w-full px-4 ml-auto mr-auto text-center grid">
                <div className="table  m-auto  sm:bg-inherit sm:m-0">
                  <Titles />
                  <Subtitles />
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
      </div>
    </>
  )
}
