'use client'

import React, { useEffect } from 'react'
import ValidateRegister from './validate-register'
import { useStoreSupabase } from '../hooks/useStores'
import { useRouter } from 'next/navigation'
import { type Store } from '../types/common-types'

const ModalCreateStore = () => {
  const { handleInsertNewStore, setName, nameStore } = useStoreSupabase({})
  const router = useRouter()
  useEffect(() => {
    fetch('/api/stores')
      .then(async response => await response.json())
      .then(json => {
        const { result } = json as { result: Store[] }
        if (result.length > 0) {
          router.push(`/${result[0].id}/dashboard`)
        }
      })
  }, [])

  return (
    <div
      id="small-modal"
      tabIndex={-1}
      className="z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-3 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Crear tienda
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="small-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleInsertNewStore}>
            <div className="p-4 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Agregue una nueva tienda para administrar sus productos y
                categorías
              </p>
              <div>
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="inputName"
                  name="inputName"
                  value={nameStore}
                  onChange={(e) => { setName(e.target.value) }}
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center p-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="small-modal"
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Aceptar
              </button>
              <button
                data-modal-hide="small-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancelar
              </button>
              <ValidateRegister />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalCreateStore
