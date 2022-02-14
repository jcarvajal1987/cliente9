import React from "react"

import { AnimatePresence } from "framer-motion"
import { AppProps } from "next/app"
import "../styles/tailwind.scss"
import { useRouter } from "next/router"

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
      <NavBar router={router.pathname} />
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
