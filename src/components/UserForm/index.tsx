import { useForm } from "react-hook-form"
import { schema } from "./schema"
import { yupResolver } from "@hookform/resolvers/yup"

type FormValues = {
  nomeCompleto?: string
  idade?: number
  rendaMensal?: number
  genero: string
}

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isValidating },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const submit = (values: FormValues) => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label>
        Nome
        <input {...register("nomeCompleto")} />
      </label>
      <label>
        Idade
        <input {...register("idade")} />
        <small>{errors.idade?.message}</small>
      </label>
      <label>
        Renda Mensal
        <input {...register("rendaMensal")} />
      </label>
      <label>
        Genero
        <input type="radio" value="masculino" {...register("genero")} />
        <input type="radio" value="feminino" {...register("genero")} />
      </label>
      <button type="submit" disabled={!isValid || isValidating}>
        Enviar
      </button>
    </form>
  )
}

export default UserForm
