import React from "react"

import { motion } from "framer-motion"

import { Carousel } from "./Carousel"

export default function LandingPage() {
  const titles = [{ title: "SOMOSSJ" }, { title: "VIVIMOS" }]
  const images = [
    {
      type: "heading1",
      url: "./bg_1.webp",
      title: "DESCUBRE",
      description: "Somos Desarrolladores.",
      transition: "transition03",
    },
    {
      type: "heading2",
      url: "./bg_1.webp",
      title: "LIDERA.",
      description: "Somos Creativos.",
      transition: "transition01",
    },
  ]

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
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.09,
      },
    },
  }
  const containerIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0,
        staggerChildren: 0.2,
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.09,
        duration: 1,
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
  return (
    <motion.main
      variants={containerIn}
      initial="hidden"
      animate="show"
      exit="exit"
      key={1}
      className="absolute top-0 w-full h-full bg-center bg-cover"
    >
      <div className="relative h-full truncate">
        <Carousel
          titles={titles}
          images={images}
          autoPlay={true}
          showButtons={true}
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
        style={{ height: "70px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </motion.main>
  )
}
