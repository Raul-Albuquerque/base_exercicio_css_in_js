<<<<<<< HEAD
import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'
import TemaPadrao from './themes/default'

function App() {
  return (
    <ThemeProvider theme={TemaPadrao}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
=======
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
  )
}

export default App
