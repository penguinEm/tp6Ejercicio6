import { Container } from "react-bootstrap"
import FormularioColores from "./components/FormularioColores"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




function App() {
  

  return (
    <>
    <Navbar></Navbar>
      <Container className="border border-primary rounded-5 mt-5 mb-5 main" >
        <FormularioColores></FormularioColores>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App
