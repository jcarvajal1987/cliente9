import React from "react"

export const Content = () => {
  return (
    <div className="overflow-auto">
      {/*<Navbar />*/}
      {/* Header */}
      <div className="pt-12 pb-32 md:pt-32">
        <div className="w-full px-4 mx-auto md:px-10">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
                        <h5 className="text-xs font-bold uppercase text-blueGray-400">
                          Traffic
                        </h5>
                        <span className="text-xl font-semibold text-blueGray-700">
                          350,897
                        </span>
                      </div>
                      <div className="relative flex-initial w-auto pl-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-red-500 rounded-full shadow-lg">
                          <i className="far fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-blueGray-400">
                      <span className="mr-2 text-emerald-500">
                        <i className="fas fa-arrow-up"></i> 3.48%
                      </span>
                      <span className="whitespace-nowrap">
                        Since last month
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
                        <h5 className="text-xs font-bold uppercase text-blueGray-400">
                          New users
                        </h5>
                        <span className="text-xl font-semibold text-blueGray-700">
                          2,356
                        </span>
                      </div>
                      <div className="relative flex-initial w-auto pl-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-orange-500 rounded-full shadow-lg">
                          <i className="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-blueGray-400">
                      <span className="mr-2 text-red-500">
                        <i className="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span className="whitespace-nowrap">Since last week</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
                        <h5 className="text-xs font-bold uppercase text-blueGray-400">
                          Sales
                        </h5>
                        <span className="text-xl font-semibold text-blueGray-700">
                          924
                        </span>
                      </div>
                      <div className="relative flex-initial w-auto pl-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-pink-500 rounded-full shadow-lg">
                          <i className="fas fa-users"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-blueGray-400">
                      <span className="mr-2 text-orange-500">
                        <i className="fas fa-arrow-down"></i> 1.10%
                      </span>
                      <span className="whitespace-nowrap">Since yesterday</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
                        <h5 className="text-xs font-bold uppercase text-blueGray-400">
                          Performance
                        </h5>
                        <span className="text-xl font-semibold text-blueGray-700">
                          49,65%
                        </span>
                      </div>
                      <div className="relative flex-initial w-auto pl-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white rounded-full shadow-lg bg-lightBlue-500">
                          <i className="fas fa-percent"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-blueGray-400">
                      <span className="mr-2 text-emerald-500">
                        <i className="fas fa-arrow-up"></i> 12%
                      </span>
                      <span className="whitespace-nowrap">
                        Since last month
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 mx-auto -m-24 md:px-10">
        <div className="flex flex-wrap">
          {/*<LineChart />
          <BarChart />*/}
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
            <div className=" flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
              <div className="px-4 py-3 mb-0 border-0 rounded-t">
                <div className="flex flex-wrap items-center">
                  <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                    <h3 className="text-base font-semibold text-blueGray-700">
                      Page visits
                    </h3>
                  </div>
                  <div className="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
                    <button
                      className="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      See all
                    </button>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                        Page name
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                        Visitors
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                        Unique users
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                        Bounce rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        /argon/
                      </th>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        4,569
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        340
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        <i className="mr-4 fas fa-arrow-up text-emerald-500"></i>
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        /argon/index.html
                      </th>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        3,985
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        319
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        <i className="mr-4 text-orange-500 fas fa-arrow-down"></i>
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        /argon/charts.html
                      </th>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        3,513
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        294
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        <i className="mr-4 text-orange-500 fas fa-arrow-down"></i>
                        36,49%
                      </td>
                    </tr>
                    <tr>
                      <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        /argon/tables.html
                      </th>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        2,050
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        147
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        <i className="mr-4 fas fa-arrow-up text-emerald-500"></i>
                        50,87%
                      </td>
                    </tr>
                    <tr>
                      <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        /argon/profile.html
                      </th>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        1,795
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        190
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        <i className="mr-4 text-red-500 fas fa-arrow-down"></i>
                        46,53%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-full px-4 xl:w-4/12">
            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
              <div className="px-4 py-3 mb-0 border-0 rounded-t">
                <div className="flex flex-wrap items-center">
                  <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                    <h3 className="text-base font-semibold text-blueGray-700">
                      Social traffic
                    </h3>
                  </div>
                  <div className="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
                    <button
                      className="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      See all
                    </button>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead className="thead-light">
                    <tr>
                      <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                        Referral
                      </th>
                      <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                        Visitors
                      </th>
                      <th
                        className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
                        style={{ minWidth: "140px" }}
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        Facebook
                      </th>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        1,480
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="mr-2">60%</span>
                          <div className="relative w-full">
                            <div className="flex h-2 overflow-hidden text-xs bg-red-200 rounded">
                              <div
                                style={{ width: "60%" }}
                                className="flex flex-col justify-center text-center text-white bg-red-500 shadow-none whitespace-nowrap"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        Facebook
                      </th>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        5,480
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="mr-2">70%</span>
                          <div className="relative w-full">
                            <div className="flex h-2 overflow-hidden text-xs rounded bg-emerald-200">
                              <div
                                style={{ width: "70%" }}
                                className="flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap bg-emerald-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        Google
                      </th>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        4,807
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="mr-2">80%</span>
                          <div className="relative w-full">
                            <div className="flex h-2 overflow-hidden text-xs bg-purple-200 rounded">
                              <div
                                style={{ width: "80%" }}
                                className="flex flex-col justify-center text-center text-white bg-purple-500 shadow-none whitespace-nowrap"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        Instagram
                      </th>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        3,678
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="mr-2">75%</span>
                          <div className="relative w-full">
                            <div className="flex h-2 overflow-hidden text-xs rounded bg-lightBlue-200">
                              <div
                                style={{ width: "75%" }}
                                className="flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap bg-lightBlue-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        twitter
                      </th>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        2,645
                      </td>
                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="mr-2">30%</span>
                          <div className="relative w-full">
                            <div className="flex h-2 overflow-hidden text-xs bg-orange-200 rounded">
                              <div
                                style={{ width: "30%" }}
                                className="flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap bg-emerald-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <footer className="block py-4">
          <div className="container px-4 mx-auto">
            <hr className="mb-4 border-b-1 border-blueGray-200" />
            <div className="flex flex-wrap items-center justify-center md:justify-between">
              <div className="w-full px-4 md:w-4/12">
                <div className="py-1 text-sm font-semibold text-blueGray-500">
                  Copyright © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="py-1 text-sm font-semibold text-blueGray-500 hover:text-blueGray-700"
                  >
                    Creative Tim
                  </a>
                </div>
              </div>
              <div className="w-full px-4 md:w-8/12">
                <ul className="flex flex-wrap justify-center list-none md:justify-end">
                  <li>
                    <a
                      href="https://www.creative-tim.com"
                      className="block px-3 py-1 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      Creative Tim
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className="block px-3 py-1 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://blog.creative-tim.com"
                      className="block px-3 py-1 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/main/LICENSE.md"
                      className="block px-3 py-1 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      MIT License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
