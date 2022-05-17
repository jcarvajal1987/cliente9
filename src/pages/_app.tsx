import React from "react"

import { AnimatePresence } from "framer-motion"
import { AppProps } from "next/app"
import "../styles/tailwind.scss"
import { useRouter } from "next/router"

import { CarouselImage } from "@components/CarouselImage"
import { NavBar } from "@components/NavBar"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  //useEffect(() => {
  //  console.log(router)
  //  if (router !== "/dashboard") {
  //    setTransparent(true)
  //  }
  //  if (router !== "/") {
  //    setTransparent(false)
  //  }
  //}, [router])

  return (
    <>
      <CarouselImage />
      <NavBar router={router.pathname} />
      <div className="flex-auto grid-content">
        <AnimatePresence>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
    </>
  )
}

export default MyApp
