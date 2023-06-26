import * as yup from "yup"

const schema = yup.object().shape({
  nomeCompleto: yup.string().required(),
  idade: yup
    .number()
    .min(18, "A pessoa deve ter mais de 18 anos")
    .required("A idade deve estar preenchida"),
  rendaMensal: yup.number().max(3000).required(),
})

const pessoa = {
  nomeCompleto: "Teste teste",
  idade: 18,
  rendaMensal: 2500,
}
const pessoa2 = {
  nomeCompleto: "Teste2 teste2",
  idade: 16,
  rendaMensal: 4000,
}

const testeObject = async () => {
  try {
    await schema.validate(pessoa)
    await schema.validate(pessoa2)
  } catch (error) {
    console.log(error)
  }
}

testeObject()
