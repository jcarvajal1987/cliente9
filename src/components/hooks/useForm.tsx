import { useEffect, useState } from "react"

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm)

  const [formValidation, setFormValidation] = useState()

  useEffect(() => {
    createValidators()
  }, [formState])

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const onResetForm = () => {}

  const createValidators = () => {
    const formCheckedValues = {}

    Object.keys(formValidations).map((item) => {
      const [fn, errorMessage] = formValidations[item]
      formCheckedValues[`${item}Valid`] = fn(formState[item])
        ? null
        : errorMessage
    })
    setFormValidation(formCheckedValues)
  }

  // Object.keys(formValidations).map((formField) => {
  //    console.log(formField);
  //    formCheckedValues[`${formField}Valid`] = fn(formState[formField])
  //      ? null
  //      : errorMessage
  //  })
  //}
  //setFormValidation(formCheckedValues)

  //const arreglo2 = [formState].map((item) => {
  //  return console.log(item.identifier)
  //})

  return {
    ...formState,
    formState,
    onInputChange,
    formValidation,
  }
}
