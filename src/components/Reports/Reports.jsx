import React from 'react'
import graph from "../../assets/graph.png";
import './Reports.css'

const Reports = () => {
  return (
    <div>
        <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
          <div id="main-content" className="scroll h-full w-full bg-gray-50 relative lg:ml-64 no-scrollbar">
            <main>
                <div className="pt-6 px-4">
                  <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex-shrink-0">
                              <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$45,385</span>
                              <h3 className="text-base font-normal text-gray-500">Transactions this week</h3>
                            </div>
                            <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                              12.5%
                              <svg className="w-5 h-5 grow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                        </div>
                        <div id="main-chart">
                        <img className="graph" src={graph} alt="Neil"/>
                        </div>
                      </div>
                  </div>
                  <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">2,340</span>
                              <h3 className="text-base font-normal text-gray-500">New Users this week</h3>
                            </div>
                            <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                              14.6%
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                        </div>
                      </div>
                      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
                              <h3 className="text-base font-normal text-gray-500">Visitors this week</h3>
                            </div>
                            <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                              32.9%
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                        </div>
                      </div>
                      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">385</span>
                              <h3 className="text-base font-normal text-gray-500">User signups this week</h3>
                            </div>
                            <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                              -2.7%
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                      <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold leading-none text-gray-900">Latest Customers</h3>
                            <a href="/reports" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2" style={{textDecoration: "auto"}}>
                            View all
                            </a>
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200">
                              <li className="py-3 sm:py-4">
                                  <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Neil"/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                          Neil Sims
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                        $320
                                    </div>
                                  </div>
                              </li>
                              <li className="py-3 sm:py-4">
                                  <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/bonnie-green.png" alt="Neil"/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                          Bonnie Green
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                        $3467
                                    </div>
                                  </div>
                              </li>
                              <li className="py-3 sm:py-4">
                                  <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/michael-gough.png" alt="Neil"/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                          Michael Gough
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                        $67
                                    </div>
                                  </div>
                              </li>
                              <li className="py-3 sm:py-4">
                                  <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/thomas-lean.png" alt="Neil"/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                          Thomes Lean
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                        $2367
                                    </div>
                                  </div>
                              </li>
                              <li className="pt-3 sm:pt-4 pb-0">
                                  <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/lana-byrd.png" alt="Neil"/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                          Lana Byrd
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                        $367
                                    </div>
                                  </div>
                              </li>
                            </ul>
                        </div>
                      </div>
                  </div>
                </div>
            </main>
          </div>
      </div>
  )
}

export default Reports