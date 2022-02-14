import React, { useEffect } from "react"

import Link from "next/link"

export const NavBar = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const [transparent, setTransparent] = React.useState(true)
  const router = props.router

  useEffect(() => {
    switch (true) {
      case router == "/dashboard":
        setTransparent(false)
        break
      case router == "/":
        setTransparent(true)
        break
    }
  }, [router])

  return (
    <nav
      className={
        (transparent
          ? "relative z-50 w-full"
          : "relative shadow-lg bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
        <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a
              className={
                (transparent ? "text-white" : "text-gray-800") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              }
            >
              Tailwind Starter Kit
            </a>
          </Link>
          <button
            className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (transparent ? "text-white" : "text-gray-800") + " fas fa-bars"
              }
            >
              X
            </i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col mr-auto list-none lg:flex-row">
            <li className="flex items-center">
              <Link href="/dashboard">
                <a
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className={
                    (transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                >
                  <i
                    className={
                      (transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " far fa-file-alt text-lg leading-lg mr-2"
                    }
                  />{" "}
                  Docs
                </a>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <i
                  className={
                    (transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " fab fa-facebook text-lg leading-lg "
                  }
                />
                <span className="inline-block ml-2 lg:hidden">Share</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <i
                  className={
                    (transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") + " fab fa-twitter text-lg leading-lg "
                  }
                />
                <span className="inline-block ml-2 lg:hidden">Tweet</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <i
                  className={
                    (transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") + " fab fa-github text-lg leading-lg "
                  }
                />
                <span className="inline-block ml-2 lg:hidden">Star</span>
              </a>
            </li>

            <li className="flex items-center">
              <button
                className={
                  (transparent
                    ? "bg-white text-gray-800 active:bg-gray-100"
                    : "bg-pink-500 text-white active:bg-pink-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <i className="fas fa-arrow-alt-circle-down"></i> Download
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
