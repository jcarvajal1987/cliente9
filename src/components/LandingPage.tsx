import React from "react"

import { motion } from "framer-motion"
import Head from "next/head"

import { Carousel } from "./Carousel"

export default function LandingPage() {
  const titles = [{ title: "SKYRIDE" }, { title: "DESCUBRE" }]
  const descriptions = [
    { description: "Somos Desarrolladores" },
    { description: "Somos Creativos" },
    { description: "Somos Innovadores" },
    { description: "Cuánto Más puedes Ser?" },
  ]
  const images = [
    {
      type: "heading1",
      url: "./landing03.webp",
      title: "DESCUBRE",
      description: "Somos Desarrolladores.",
      transition: "transition03",
    },
    {
      type: "heading2",
      url: "./woman2.webp",
      title: "LIDERA.",
      description: "Somos Creativos.",
      transition: "transition01",
    },
  ]

  const containerIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0,
        staggerChildren: 0.2,
        duration: 0,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.09,
        delay: 1,
        duration: 0,
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
      className="absolute top-0 w-full h-full"
    >
      <Head>
        <title>kyo</title>
        <meta name="description" content="kyood" />
        <meta itemProp="name" content="very" />
        <meta itemProp="description" content="hide" />
        <meta itemProp="image" content="gack" />
      </Head>
      <div className="relative h-full truncate ">
        <Carousel
          titles={titles}
          descriptions={descriptions}
          images={images}
          autoPlay={true}
          showButtons={true}
        />
      </div>
    </motion.main>
  )
}
