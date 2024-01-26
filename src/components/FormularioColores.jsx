import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import ContenedorCards from "./ContenedorCards";

const FormularioColores = () => {
  /* Variables------------------------------------------------- */
  const [inputColor, setInputColor] = useState("");
  const arrayColoresLocalStorage =
    JSON.parse(localStorage.getItem("coloresKey")) || [];
  const [arrayColores, setArrayColores] = useState(arrayColoresLocalStorage);

  /* Funciones -------------------------------------------- */

  const manejadorSubmit = (e) => {
    e.preventDefault();

    if (inputColor === "") {
      alert("Ingrese un color antes de guardar");
    } else {
      setArrayColores([...arrayColores, inputColor]);
      setInputColor("");
    }
  };

  const borrarColor = (colorBorrado) => {
    const copiaArrayColores = arrayColores.filter(
      (copiaColor) => copiaColor !== colorBorrado
    );
    setArrayColores(copiaArrayColores);
  };

  useEffect(() => {
    localStorage.setItem("coloresKey", JSON.stringify(arrayColores));
  }, [arrayColores]);
  /* Maquetado - log ext---------------------------------------- */

  return (
    <>
      <Form className="pt-5" onSubmit={manejadorSubmit}>
        <Form.Group className="mb-3" controlId="nombreColor">
          <Form.Label className="px-5 pb-4 w-100 text-primary">
            Administrar Colores
          </Form.Label>
          <div className="d-flex justify-content-around py-5 bg-body-tertiary m7-5 align-items-center">
            <div
              className="colorInput rounded-2 shadow border border-dark"
              style={{ background: inputColor }}
            ></div>
            <Form.Control
              type="text"
              placeholder="Ingrese un color, por su nombre en ingles o hexadecimal "
              className="w-50 h-75 color-titulo"
              minLength={3}
              maxLength={10}
              onChange={(e) => setInputColor(e.target.value)}
              value={inputColor}
            />
          </div>
          <div className="mt-5 text-end mx-5 border-primary border-bottom py-3">
            <Button type="submit" variant="primary" className="rounded-1 ">
              Guardar
            </Button>
          </div>
        </Form.Group>
      </Form>
      <ContenedorCards
        arrayColores={arrayColores}
        borrarColor={borrarColor}
      ></ContenedorCards>
    </>
  );
};

export default FormularioColores;
