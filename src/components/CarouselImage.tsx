import React, { useEffect, useState } from "react"

import { useRouter } from "next/router"

export const CarouselImage = (props) => {
  const images = [
    { url: "./landing03.webp", transition: "transition01" },
    { url: "./woman5.webp", transition: "transition01" },
  ]

  const [index, setIndex] = useState(1)

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
        delay: 0,
        duration: 0.3,
      },
    },
  }

  const selectedImage = images[index]

  useEffect(() => {
    const timer = setInterval(() => {
      index + 1 === images.length ? setIndex(0) : setIndex(index + 1)
    }, 10000)
    return () => clearInterval(timer)
  }, [index])

  // setInterval(() => {
  //  index === images.length ? setIndex(0) : setIndex(index + 1)
  //}, 5000)

  //useEffect(() => {
  //  if (index + 1 === images.length) {
  //    const jorge2 = setInterval(() => {
  //      setIndex(0)
  //    }, 10000)
  //    return () => clearInterval(jorge2)
  //  } else {
  //    const jorge2 = setInterval(() => {
  //      setIndex(index + 1)
  //    }, 10000)
  //    return () => clearInterval(jorge2)
  //  }
  //}, [index])

  //const [path, setPath] = useState("transition01")

  //const generateRandomNumber = () => {
  //  return Math.floor(Math.random() * 4) + 1
  //}

  //function defineImgPath(result) {
  //  switch (result) {
  //    case 1:
  //      setPath("transition01")
  //      break
  //    case 2:
  //      setPath("transition02")
  //      break
  //    case 3:
  //      setPath("transition03")
  //      break
  //    case 4:
  //      setPath("transition04")
  //      break
  //  }
  //}

  //const rollDice = () => {
  //  const result = generateRandomNumber()
  //  defineImgPath(result)
  //}
  //useEffect(() => {
  //  rollDice()
  //}, [props.props.url])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0,
        duration: 1,
      },
    },
  }

  const [blur, setBlur] = React.useState(false)

  const ruta = useRouter()

  const router = ruta.pathname

  useEffect(() => {
    switch (router) {
      case "/":
        setBlur(false)
      case "/login":
      case "/register":
        setBlur(false)
        break
      default:
        setBlur(true)
    }
  }, [router])

  return (
    <>
      <div
        className={
          (blur ? "blur-bg" : "not-blur") +
          " absolute overflow-hidden top-0 w-full h-full block z-[-4]"
        }
      ></div>

      <div className="absolute top-0 block w-full h-full overflow-hidden z-[-5]">
        {images.map((img, index) => {
          return (
            <div
              className={`absolute top-0 w-full h-full bg bg-center transition ${
                img.transition
              } ${img.url === selectedImage.url ? "entrar " : "salir"}`}
              key={index}
              style={{
                backgroundImage: `url(${img.url})`,
              }}
            ></div>
          )
        })}
      </div>
    </>
  )
}
