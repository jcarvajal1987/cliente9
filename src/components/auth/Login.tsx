import React, { useState } from "react"

import Link from "next/link"
import { useRouter } from "next/router"

import useAuth from "@components/hooks/useAuth"
import { useForm } from "@components/hooks/useForm"
import { LoginApi } from "api/user"

import { FormLayout } from "./FormLayout"

const Login = () => {
  const auth = useAuth()
  console.log(auth)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { formState, onInputChange } = useForm({
    identifier: "",
    password: "",
  })

  //useEffect(() => {
  //  console.log(formState)
  //}, [formState])

  const { identifier, password } = formState

  const onSubmit = async (event) => {
    event.preventDefault(), setLoading(true)
    console.log(formState)
    const response = await LoginApi(formState)
    setLoading(false)
    if (response?.jwt) {
      console.log("formulario paso")
      router.push("./dashboard")
    } else {
      console.log("formulario error")
    }
  }
  return (
    <>
      <FormLayout>
        <form onSubmit={onSubmit} className="w-full max-w-md p-6">
          <h1 className="block mb-2 text-xl font-bold primary text-grey-darker">
            Login
          </h1>
          <div className="mb-4">
            {/*<label
                      className="block mb-2 text-sm font-bold text-grey-darker"
                      htmlFor="username"
                    >
                      Username
                    </label>*/}
            <input
              name="identifier"
              type="identifier"
              className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
              placeholder="identifier"
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
            {loading ? <div>loading</div> : <h1>Iniciar Sesión</h1>}
          </button>

          <div className="flex items-center justify-center py-2 mb-2 border-b  border-slate-300 ">
            <a
              className="inline-block text-xs text-blue-700 align-baseline hover:text-blue-darker"
              href="#"
            >
              Has olvidado la contraseña?
            </a>
          </div>

          <Link href="/register">
            <button
              className="w-full px-4 py-2  mb-10 text-white bg-green-500 rounded hover:bg-blue-dark"
              type="submit"
            >
              Crear Nueva Cuenta
            </button>
          </Link>
        </form>
      </FormLayout>
    </>
  )
}

export default Login
