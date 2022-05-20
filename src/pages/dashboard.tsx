import React from "react"

import dynamic from "next/dynamic"

const Dasboard = dynamic(() => import("@components/dashboard/Dashboard"))

export default function dashboard() {
  return (
    <>
      <Dasboard />
    </>
  )
}
