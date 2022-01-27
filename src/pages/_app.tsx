import React from "react"

import { AppProps } from "next/app"

import "../styles/tailwind.scss"
import { NavBar } from "@components/NavBar"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
