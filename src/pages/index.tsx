import React from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <>
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
                    <a
                      className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                      href="#pablo"
                    >
                      Discover
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                      href="#pablo"
                    >
                      Profile
                    </a>
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
    </>
  )
}

interface FeatureListProps {
  children: React.ReactNode
}

function FeatureList({ children }: FeatureListProps) {
  return <ul className="px-12 py-12 space-y-5">{children}</ul>
}

function Feature({ children, main }) {
  return (
    <li className="flex items-center">
      <CheckIcon className="flex-shrink-0 hidden w-5 h-5 p-1 text-gray-100 bg-blue-600 rounded-full sm:inline hiddden" />
      <p className="hidden ml-3 text-lg text-gray-600 sm:inline">{children}</p>

      <p className="mx-auto sm:hidden">
        <InfoText text={main} />
      </p>
    </li>
  )
}

function InfoText({ text }) {
  return (
    <span className="inline-flex items-center px-3 py-2 font-medium text-gray-700 bg-gray-100 rounded-md">
      <CheckIcon className="inline-flex flex-shrink-0 w-5 h-5 p-1 mr-3 text-gray-100 bg-blue-600 rounded-full sm:hidden" />
      {text}
    </span>
  )
}

function CheckIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}
