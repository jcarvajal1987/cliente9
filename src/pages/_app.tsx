import React from "react"

import { AppProps } from "next/app"

import "../styles/tailwind.scss"
import { useRouter } from "next/router"

import { NavBar } from "@components/NavBar"

import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  return (
    <>
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
