import React from "react"

import Link from "next/link"

export default function authLayout() {
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
            <form className="w-full max-w-xs p-6">
              <h1 className="block mb-2 text-xl font-bold primary text-grey-darker">
                Login <Link href="/register"> register</Link>
              </h1>
              <div className="mb-4">
                {/*<label
                  className="block mb-2 text-sm font-bold text-grey-darker"
                  htmlFor="username"
                >
                  Username
                </label>*/}
                <input
                  name="name"
                  type="text"
                  className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                {/*<label
                  className="block mb-2 text-sm font-bold text-grey-darker"
                  htmlFor="password"
                >
                  Password
                </label>*/}
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

              <Link href="/dashboard">
                <button
                  className="w-full px-4 py-2  font-bold text-white bg-blue-700 rounded hover:bg-blue-dark"
                  type="submit"
                >
                  Iniciar Sesión
                </button>
              </Link>

              <div className="flex items-center justify-center py-2 mb-2 border-b  border-slate-300 ">
                <a
                  className="inline-block text-xs text-blue-700 align-baseline hover:text-blue-darker"
                  href="#"
                >
                  Has olvidado la contraseña?
                </a>
              </div>
              <Link href="/dashboard">
                <button
                  className="w-full px-4 py-2  mb-10 text-white bg-green-500 rounded hover:bg-blue-dark"
                  type="submit"
                >
                  Crear Nueva Cuenta
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
