import React from "react"

import Link from "next/link"

import { useForm } from "@components/hooks/useForm"

import { FormLayout } from "./FormLayout"

const Login = () => {
  const { formState, onInputChange } = useForm({
    email: "j",
    password: "k",
  })

  //useEffect(() => {
  //  console.log(formState)
  //}, [formState])

  const { email, password } = formState

  const onSubmit = (event) => {
    event.preventDefault(), console.log({ formState })
  }
  return (
    <>
      <FormLayout>
        <form onSubmit={onSubmit} className="w-full max-w-xs p-6">
          <h1 className="block mb-2 text-xl font-bold primary text-grey-darker">
            Login<Link href="/register"> register</Link>
          </h1>
          <div className="mb-4">
            {/*<label
                      className="block mb-2 text-sm font-bold text-grey-darker"
                      htmlFor="username"
                    >
                      Username
                    </label>*/}
            <input
              name="email"
              type="email"
              className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
              placeholder="Username"
              onChange={onInputChange}
            />
          </div>
          <div className="mb-6">
            {/*<label
                      className="block mb-2 text-sm font-bold text-grey-darker"
                      htmlFor="password"
                    >
                      Password
                    </label>*/}
            <input
              name="password"
              type="password"
              placeholder="******************"
              className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
              onChange={onInputChange}
            />
            <p className="text-xs italic text-red">Please choose a password.</p>
          </div>

          <button
            className="w-full px-4 py-2  font-bold text-white bg-blue-700 rounded hover:bg-blue-dark"
            type="submit"
          >
            Iniciar Sesión
          </button>

          <div className="flex items-center justify-center py-2 mb-2 border-b  border-slate-300 ">
            <a
              className="inline-block text-xs text-blue-700 align-baseline hover:text-blue-darker"
              href="#"
            >
              Has olvidado la contraseña?
            </a>
          </div>

          <button
            className="w-full px-4 py-2  mb-10 text-white bg-green-500 rounded hover:bg-blue-dark"
            type="submit"
          >
            Crear Nueva Cuenta
          </button>
        </form>
      </FormLayout>
    </>
  )
}

export default Login
