import React, { useState } from "react"

export default function SideBar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden")

  const [button, setButton] = useState(true)

  return (
    <>
      <div className="flex justify-between text-gray-100 bg-gray-800 sidebar md:hidden">
        <a href="#" className="block p-4 font-bold text-white">
          Better Dev
        </a>
        <button
          onClick={() => setButton(!button)}
          className="p-4 mobile-menu-button focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={
          (button ? "-translate-x-full" : "") +
          " sidebar z-10 bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out"
        }
      >
        <a
          href="#"
          className="flex items-center px-4 text-white space-x-2 transition-duration-200 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13 7H7v6h6V7z" />
            <path
              fillRule="evenodd"
              d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-extrabold text-2x1">Better Dev</span>
        </a>
        <nav>
          <a
            href=""
            className="block px-4 rounded py-2.5 hover:bg-blue-700 hover:text-white transition duration-200"
          >
            Home
          </a>
          <a
            href=""
            className="block px-4 rounded py-2.5 hover:bg-blue-700 hover:text-white transition duration-200"
          >
            About
          </a>
          <a
            href=""
            className="block px-4 rounded py-2.5 hover:bg-blue-700 hover:text-white transition duration-200"
          >
            Features
          </a>
          <a
            href=""
            className="block px-4 rounded py-2.5 hover:bg-blue-700 hover:text-white transition duration-200"
          >
            Pricing
          </a>
        </nav>
      </div>
    </>
  )
}