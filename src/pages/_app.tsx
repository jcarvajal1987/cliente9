import React, { useMemo, useRef } from "react"

import { AnimatePresence } from "framer-motion"

import AuthContext from "../context/AuthContext"

import { AppProps } from "next/app"
import "../styles/tailwind.scss"
import { useRouter } from "next/router"

import { CarouselImage } from "@components/CarouselImage"
import { NavBar } from "@components/NavBar"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const authData = useMemo(
    () => ({
      auth: { name: "kyo", email: "kyo@gmail.com" },
      login: () => null,
      logout: () => null,
      setReloadUser: () => null,
    }),
    []
  )
  const router = useRouter()
  const pTag = useRef()

  //useLayoutEffect(() => {
  //  console.log(pTag.current.getBoundingClientRect())
  //}, [pTag])

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
    <AuthContext.Provider value={authData}>
      <CarouselImage />
      <NavBar router={router.pathname} />
      <div ref={pTag} className="flex-auto  overflow-hidden grid-content">
        <AnimatePresence>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
    </AuthContext.Provider>
  )
}

export default MyApp
