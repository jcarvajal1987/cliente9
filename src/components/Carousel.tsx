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
      }, 8000)
      return () => clearInterval(interval)
    }
  })

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
        delayChildren: 2,
        staggerChildren: 0.3,
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0,
        staggerChildren: 0.2,
        duration: 2,
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
      setLoaded(true)
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
    }, 500)
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
            backgroundImage: `url(${selectedImage.url})`,
          }}
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={selectedImage.url}
          className="absolute top-0 w-full h-full bg-center bg-cover"
        >
          <span
            id="blackOverlay"
            className="absolute w-full h-full bg-black opacity-75"
          ></span>

          <div
            style={{
              minHeight: "100vh",
            }}
            className="relative flex items-center content-center justify-center pt-16 pb-32"
          >
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
                <AnimatePresence>
                  {loaded && (
                    <motion.div
                      variants={container}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className=""
                      key={selectedImage}
                    >
                      <motion.div variants={item}>
                        <h1 className="text-5xl font-semibold text-white">
                          {selectedImage.title}
                        </h1>
                      </motion.div>

                      <motion.div variants={item}>
                        <p className="mt-4 text-lg text-gray-300">
                          {selectedImage.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
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
