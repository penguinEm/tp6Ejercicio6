import { Container } from "react-bootstrap"
import FormularioColores from "./components/FormularioColores"
import ContenedorCards from "./components/ContenedorCards"


function App() {
  

  return (
    <>
      <Container className="border border-primary rounded-5 mt-5 mb-5" >
        <FormularioColores></FormularioColores>
      </Container>
    </>
  )
}

export default App
