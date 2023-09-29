'use client'

import UserIcon from '@/public/icons/user-icon'
import Link from 'next/link'
import React, { useState } from 'react'

const OptionMenu = [
  {
    name: 'Dashboard',
    link: 'dashboard'
  },
  {
    name: 'Categorías',
    link: 'categories'
  },
  {
    name: 'Medidas',
    link: 'sizes'
  },
  {
    name: 'Colores',
    link: 'colors'
  },
  {
    name: 'Productos',
    link: 'products'
  },
  {
    name: 'Ordenes',
    link: 'orders'
  },
  {
    name: 'Opciones',
    link: 'options'
  }
] as const

const LayoutStore = ({ params, children }: { params: { id: number }, children: React.ReactNode }) => {
  const { id } = params
  const [isInfoUserOpen, setInfoUserOpen] = useState<boolean>(false)
  const [isOpenListStores, setOpenListStores] = useState<boolean>(false)
  return (
    <section>
      <nav className="bg-white dark:bg-custom-black border-b-2 border-white">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <div className="flex">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 flex justify-around items-center w-44 py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-custom-blue-neon dark:text-black hover:bg-custom-blue-neon focus:outline-none dark:bg-custom-blue-neon dark:hover:bg-custom-blue-neon"
              type="button"
              onClick={() => {
                setOpenListStores(!isOpenListStores)
              }}
            >
              Todas las tiendas{' '}
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isOpenListStores && (
              <div
                id="dropdown"
                className="absolute top-16 left-4 z-10 bg-white divide-y divide-gray-100 shadow w-44 dark:bg-custom-blue-neon"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-black dark:text-black dark:hover:text-white"
                    >
                      Shopping
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={() => {
              setInfoUserOpen(!isInfoUserOpen)
            }}
          >
            <UserIcon />
          </button>
          {isInfoUserOpen && (
            <div
              className="absolute top-12 right-4 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  md:dark:bg-custom-black dark:border-gray-700">
            {OptionMenu.map(({ link, name }) => (
              <li key={name}
              className="block py-2 pl-3 pr-4 text-white dark:hover:bg-custom-blue-neon dark:hover:font-bold dark:hover:text-black md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white"
              >
                <Link
                  href={`/${id}/${link}`}
                  aria-current="page"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    {children}
    </section>
  )
}

export default LayoutStore
