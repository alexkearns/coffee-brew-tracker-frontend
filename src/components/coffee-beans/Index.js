import React, { useState, useEffect } from 'react';
import {LightBulbIcon, RefreshIcon, ShoppingCartIcon, ExclamationIcon, PlusCircleIcon} from '@heroicons/react/solid'
import {Link} from "react-router-dom";

export default function Index(props) {
  props.setPageTitle("Coffee beans")

  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [coffeeBeans, setCoffeeBeans] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}/coffee-beans`)
      .then(res => res.json())
      .then(
        (result) => {
          setCoffeeBeans(result.coffeeBeans)
          setIsLoaded(true)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setCoffeeBeans([])
          setIsLoaded(true)
          setErrorMessage("API request failed")
        }
      )
  }, [])

  if(isLoaded === false){
    return (<div className={"flex items-center"}>
      <span className={"text-lg"}>Loading...</span><RefreshIcon className="animate-spin ml-4 h-8 w-8 text-gray-900" aria-hidden="true" />
    </div>)
  }

  if(errorMessage !== null){
    return (<div className={"flex items-center"}>
      <span className={"text-lg text-red-500"}>{errorMessage}</span><ExclamationIcon className="ml-4 h-8 w-8 text-red-900" aria-hidden="true" />
    </div>)
  }

  return (
    <>
      <div className={"flex justify-end mb-5"}>
        <Link
          to={"/coffee-beans/add-bean"
        }>
          <button
            type="button"
            className="inline-flex items-center px-3 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add bean
            <PlusCircleIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
        </Link>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {coffeeBeans.map((bean) => (
            <li key={bean.id}>
              <a href="#" className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">{bean.name}</p>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500 mr-5">
                        <ShoppingCartIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        {bean.roaster}
                      </p>
                      <p className="flex items-center text-sm text-gray-500">
                        <LightBulbIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        {bean.tastingNotes}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      Strength {bean.strength}/5
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>

  )
}