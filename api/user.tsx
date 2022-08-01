import { BASE_PATH } from "../utils/constants"
export async function RegisterApi(formState) {
  try {
    const url = BASE_PATH + `api/auth/local/register`
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    }
    const response = await fetch(url, params)
    const result = await response.json()
    return result
  } catch (error) {
    console.log("catch error")
    console.log(error)

    return null
  }
}

export async function LoginApi(formState) {
  try {
    const url = BASE_PATH + `api/auth/local`
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    }
    const response = await fetch(url, params)
    const result = await response.json()
    console.log("kyo")
    return result
  } catch (error) {
    console.log("kyo2")
    console.log(error)
    return null
  }
}
