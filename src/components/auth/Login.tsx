import React, { useState } from "react"

import Link from "next/link"
import { useRouter } from "next/router"

import { LoginApi } from "@api/user"
import useAuth from "@components/hooks/useAuth"
import { useForm } from "@components/hooks/useForm"

import { FormLayout } from "./FormLayout"

const initialForm = {
  identifier: "kakarotoroth@gmail.com",
  password: "123456",
}

const formValidations = {
  identifier: [(value) => value.includes("@"), "el correo deve tener un @"],
  password: [
    (value) => value.length >= 6,
    "el password debe tener ,mas de 6 letras",
  ],

  //displayName: [(value) => value.length >= 1, "el nombre es requerido"],
}

export default function Login() {
  const { auth, login } = useAuth()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { formState, onInputChange, formValidation } = useForm(
    initialForm,
    formValidations
  )
  console.log(formValidation)

  //useEffect(() => {
  //  console.log(formState)
  //}, [formState])

  const onSubmit = async (event) => {
    event.preventDefault(), setLoading(true)
    console.log(formState)
    const response = await LoginApi(formState)
    setLoading(false)
    if (response?.jwt) {
      login(response.jwt)

      router.push("./dashboard")
    } else {
      console.log("formulario error")
    }
  }
  const resetPassword = () => {}
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
              onClick={resetPassword}
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
