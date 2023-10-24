import { FormEvent, useState } from 'react'
<<<<<<< HEAD
import { FormDasVagas, FormBotao, FormInput } from './styles'
=======

import styles from './FormVagas.module.css'
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a

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
<<<<<<< HEAD
    <FormDasVagas onSubmit={aoEnviarForm}>
      <FormInput
=======
    <form className={styles.form} onSubmit={aoEnviarForm}>
      <input
        className={styles.campo}
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
<<<<<<< HEAD
      <FormBotao type="submit">Pesquisar</FormBotao>
    </FormDasVagas>
=======
      <button className={styles.btnPesquisar} type="submit">
        Pesquisar
      </button>
    </form>
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
  )
}
export default FormVagas
