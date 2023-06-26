import * as yup from "yup"

export const schema = yup.object().shape({
  nomeCompleto: yup.string().required(),
  idade: yup
    .number()
    .min(18, "A pessoa deve ter mais de 18 anos")
    .required("A idade deve estar preenchida"),
  rendaMensal: yup.number().max(3000).required(),
  genero: yup.string().required(),
})
