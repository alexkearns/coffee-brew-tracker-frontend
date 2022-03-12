import { useState } from 'react'
import {
  Navigate,
} from 'react-router-dom';

const Add = () => {
  const [ details, setDetails ] = useState({
    name: "",
    roaster: "",
    strength: "",
    tastingNotes: ""
  })
  const [ shouldRedirect, setShouldRedirect ] = useState(false)

  const handleUpdate = (e) => {
    const newDetails = {...details}
    newDetails[e.target.name] = e.target.value
    setDetails(newDetails)
  }

  const submit = () => {
    const response = fetch(
      `${process.env.REACT_APP_API_BASE}/coffee-beans`,
      {method: "POST", body: JSON.stringify(details)}
    )
    setShouldRedirect(true)
  }

  if(shouldRedirect) {
    return <Navigate replace to="/coffee-beans" />
  }

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Bean details</h3>
              <p className="mt-1 text-sm text-gray-600">
                Here's your chance to tell us all about the latest coffee bean you're trying.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Bean name
                    </label>
                    <input
                      onChange={handleUpdate}
                      value={details.name}
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="roaster" className="block text-sm font-medium text-gray-700">
                      Roaster
                    </label>
                    <input
                      onChange={handleUpdate}
                      value={details.roaster}
                      type="text"
                      name="roaster"
                      id="roaster"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <fieldset>
                    <div>
                      <legend className="block text-sm font-medium text-gray-700">Strength</legend>
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          checked={details.strength === "1"}
                          onChange={handleUpdate}
                          id="1"
                          value={"1"}
                          name="strength"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="1" className="ml-3 block text-sm font-regular text-gray-700">
                          1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked={details.strength === "2"}
                          onChange={handleUpdate}
                          id="2"
                          value={"2"}
                          name="strength"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="2" className="ml-3 block text-sm font-regular text-gray-700">
                          2
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked={details.strength === "3"}
                          onChange={handleUpdate}
                          id="3"
                          value={"3"}
                          name="strength"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="3" className="ml-3 block text-sm font-regular text-gray-700">
                          3
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked={details.strength === "4"}
                          onChange={handleUpdate}
                          id="4"
                          value={"4"}
                          name="strength"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="4" className="ml-3 block text-sm font-regular text-gray-700">
                          4
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          checked={details.strength === "5"}
                          onChange={handleUpdate}
                          id="5"
                          value={"5"}
                          name="strength"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="5" className="ml-3 block text-sm font-regular text-gray-700">
                          5
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div>
                  <label htmlFor="tastingNotes" className="block text-sm font-medium text-gray-700">
                    Tasting notes
                  </label>
                  <div className="mt-1">
                    <textarea
                      onChange={handleUpdate}
                      value={details.tastingNotes}
                      id="tastingNotes"
                      name="tastingNotes"
                      rows={3}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Chocolate / Praline / Hazelnut"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description of how the coffee is meant to taste.
                  </p>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="button"
                  onClick={submit}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Add