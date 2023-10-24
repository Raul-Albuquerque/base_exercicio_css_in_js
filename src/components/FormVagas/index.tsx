import { FormEvent, useState } from 'react'
import { FormDasVagas, FormBotao, FormInput } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormDasVagas onSubmit={aoEnviarForm}>
      <FormInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <FormBotao type="submit">Pesquisar</FormBotao>
      <FormBotao type="submit">Pesquisar</FormBotao>
    </FormDasVagas>
  )
}
export default FormVagas
