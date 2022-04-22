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
      className={`fixed top-0 left-0 flex flex-wrap items-center justify-center w-full h-full mx-auto `}
      variants={Layout}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={3}
    >
      <div className="container flex flex-wrap mx-auto">
        <div className="flex-wrap block w-full   sm:pb-0 sm:w-7/12 md:w-6/12">
          <div className="w-full px-4 mx-auto ml-auto mr-auto text-center grid">
            <div className="table w-full max-w-xs p-6 m-auto  bg-white border rounded shadow-lg">
              <div>login</div>
              <input className="w-full mb-5 border rounded" />
              <input className="w-full mb-5 border rounded" />
              <input className="w-full mb-5 border rounded" />
              <Link href="/dashboard">
                <a className="">
                  <button
                    className="px-4 py-2 mb-3  text-xs font-bold text-white uppercase bg-blue-700 rounded shadow outline-none active:bg-gray-100 hover:shadow-md focus:outline-none lg:mb-0"
                    type="button"
                  >
                    Login
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
