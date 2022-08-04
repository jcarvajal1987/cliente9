import React, { useEffect, useMemo, useRef, useState } from "react"

import { AnimatePresence } from "framer-motion"
import { AppProps } from "next/app"

import AuthContext from "../context/AuthContext"

import "../styles/tailwind.scss"
import { useRouter } from "next/router"

import { CarouselImage } from "@components/CarouselImage"
import { NavBar } from "@components/NavBar"

import jwtDecode from "jwt-decode"

import { getToken, setToken } from "@api/token"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [auth, setAuth] = useState(undefined)
  const [reloadUser, setReloadUser] = useState(false)
  useEffect(() => {
    const token = getToken()
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      })
    } else {
      setAuth(null)
    }
    setReloadUser(false)
  }, [reloadUser])

  const login = (token) => {
    setToken(token)

    setAuth({
      token,
      idUser: jwtDecode(token).id,
    })
  }

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout: () => null,
      setReloadUser,
    }),
    [auth]
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
  if (authData === undefined) return null
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
