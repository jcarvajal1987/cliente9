import React, { useEffect, useState } from "react"

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
  }
  useEffect(() => {
    rollDice()
  }, [props.props.url])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0,
        delayChildren: 0,
        staggerChildren: 0.3,
        duration: 4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0,
        staggerChildren: 0.2,
        delayChildren: 2,
        duration: 4,
      },
    },
  }

  return (
    <>
      {props.props.map((img, index) => {
        return (
          <div
            key={index}
            className={`absolute top-0 w-full h-full bg bg-center transition ${
              img.transition
            } ${img.type === props.stateImage.type ? "entrar" : "salir"}`}
            style={{
              backgroundImage: `url(${img.url})`,
            }}
          ></div>
        )
      })}
    </>
  )
}
