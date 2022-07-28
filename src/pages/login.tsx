import React from "react"

import dynamic from "next/dynamic"

const Login = dynamic(() => import("@components/auth/Login"))

export default function dashboard() {
  return (
    <>
      <Login />
    </>
  )
}
