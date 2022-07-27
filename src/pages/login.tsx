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
    <motion.main
      className="overflow-hidden relative-grid grid"
      variants={Layout}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={3}
    >
      <section className="items-center overflow-auto grid">
        <div className="container mx-auto">
          <div className="flex justify-center sm:pb-0 sm:w-7/12 md:w-6/12">
            <div className="w-full max-w-xs p-6">
              <div className="mb-4">
                <h1 className="block mb-2 text-xl font-bold text-grey-darker">
                  Login <Link href="/register"> register</Link>
                </h1>
                <label
                  className="block mb-2 text-sm font-bold text-grey-darker"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  name="name"
                  type="text"
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
                  name="name"
                  type="email"
                  placeholder="******************"
                  className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
                />
                <p className="text-xs italic text-red">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center justify-between pb-8">
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
      </section>
    </motion.main>
  )
}
