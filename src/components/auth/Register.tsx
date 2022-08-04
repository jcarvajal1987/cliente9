import React, { useState } from "react"

import { useRouter } from "next/router"

import { useForm } from "@components/hooks/useForm"

import { RegisterApi } from "../../api/user"
import { FormLayout } from "./FormLayout"

const Register = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { formState, onInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  })

  //useEffect(() => {
  //  console.log(formState)
  //}, [formState])

  const { email, password, password2 } = formState

  const onSubmit = async (event) => {
    event.preventDefault(), setLoading(true)
    const response = await RegisterApi(formState)
    console.log(response)
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
        <form onSubmit={onSubmit} className="w-full max-w-xs p-6">
          <h1 className="block mb-2 text-xl font-bold text-grey-darker">
            Register
          </h1>
          <div className="mb-4">
            <input
              name="username"
              type="text"
              className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
              placeholder="username"
              onChange={onInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              name="email"
              type="email"
              className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
              placeholder="email"
              onChange={onInputChange}
            />
          </div>

          <div className="mb-4">
            <input
              name="password"
              type="password"
              className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker"
              placeholder="password"
              onChange={onInputChange}
            />
          </div>

          <button
            className="w-full px-4 py-2 mb-20 font-bold text-white bg-blue-700 rounded hover:bg-blue-dark"
            type="submit"
          >
            {loading ? <div>loading</div> : <h1>resgister</h1>}
          </button>
        </form>
      </FormLayout>
    </>
  )
}

export default Register
