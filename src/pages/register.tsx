import React from "react"

import dynamic from "next/dynamic"

const Register = dynamic(() => import("@components/auth/Register"))

export default function dashboard() {
  return (
    <>
      <Register />
    </>
  )
}
