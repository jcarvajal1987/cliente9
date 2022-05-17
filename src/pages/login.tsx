import React from "react"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Login() {
  const Layout = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,

      transition: {
        duration: 0.4,
      },
    },
  }
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        delay: 0.7,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,

      transition: {
        duration: 0.4,
      },
    },
  }
  return (
    <motion.div
      className={`relative-grid top-0 left-0 flex flex-wrap items-center justify-center w-full h-full mx-auto `}
      variants={Layout}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={3}
    >
      <div className="container flex flex-wrap mx-auto">
        <div className="flex-wrap block w-full   sm:pb-0 sm:w-7/12 md:w-6/12">
          <div className="w-full px-4 mx-auto ml-auto mr-auto text-center grid">
            <div className="table w-full max-w-xs p-6 m-auto  rounded ">
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-grey-darker"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-bold text-grey-darker"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 border rounded shadow appearance-none border-red text-grey-darker"
                  placeholder="******************"
                />
                <p className="text-xs italic text-red">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Link href="/dashboard">
                  <button
                    className="px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-dark"
                    type="button"
                  >
                    Sign In
                  </button>
                </Link>
                <a
                  className="inline-block text-sm font-bold align-baseline text-blue hover:text-blue-darker"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
