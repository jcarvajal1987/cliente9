import React from "react"

import Link from "next/link"

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <div className="flex flex-wrap py-2">
      <div className="w-full px-4">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 rounded">
          <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
            <div className="relative flex justify-between w-full px-4 lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap"
                href="#pablo"
              >
                pink Starter Menu
              </a>
              <button
                className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <i className="fas fa-bars">kyo</i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (menuOpen ? " flex" : " hidden")
              }
              id="example-navbar-info"
            >
              <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
                <li className="nav-item">
                  <Link href="/">
                    <a
                      className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                      href="#pablo"
                    >
                      Discover
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <a
                      className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                      href="#pablo"
                    >
                      Profile
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                    href="#pablo"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
