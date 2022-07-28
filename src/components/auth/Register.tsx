import React from "react"

import { useForm } from "@components/hooks/useForm"

import { FormLayout } from "./FormLayout"

const Register = () => {
  const { formState, onInputChange } = useForm({
    email: "",
    password: "",
    password2: "",
  })

  //useEffect(() => {
  //  console.log(formState)
  //}, [formState])

  const { email, password, password2 } = formState

  const onSubmit = (event) => {
    event.preventDefault(), console.log({ formState })
  }
  return (
    <>
      <FormLayout>
        <form onSubmit={onSubmit} className="w-full max-w-xs p-6">
          <h1 className="block mb-2 text-xl font-bold text-grey-darker">
            Register
          </h1>
          <div className="mb-4">
            <input
              name="email"
              type="email"
              className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
              placeholder="email"
            />
          </div>

          <div className="mb-4">
            <input
              name="password"
              type="password"
              className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
              placeholder="password"
            />
          </div>
          <div className="mb-6">
            <input
              name="password2"
              type="password"
              className="w-full px-3 py-2 mb-3 border rounded shadow appearance-none border-red text-grey-darker"
              placeholder="repite password"
            />
            <p className="text-xs italic text-red">Please choose a password.</p>
          </div>

          <button
            className="w-full px-4 py-2 mb-20 font-bold text-white bg-blue-700 rounded hover:bg-blue-dark"
            type="submit"
          >
            Registrar
          </button>
        </form>
      </FormLayout>
    </>
  )
}

export default Register
