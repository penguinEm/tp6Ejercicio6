import { Button, Form } from "react-bootstrap";

const FormularioColores = () => {
  return (
    <Form className="pt-5">
      <Form.Group className="mb-3" controlId="nombreColor">
        <Form.Label className="px-5 pb-4 w-100 text-primary">
          Administrar Colores
        </Form.Label>
        <div className="d-flex justify-content-around py-5 bg-body-tertiary m7-5 align-items-center">
          <div className="colorInput rounded-2 shadow border border-dark" style={{background: "blue"}}>
          </div>
          <Form.Control
            type="text"
            placeholder="Ingrese un color, por su nombre en ingles o hexadecimal "
            className="w-50 h-75 color-titulo"
            minLength={3}
            maxLength={30}
          />
        </div>
        <div className="mt-5 text-end mx-5 border-primary border-bottom py-3">
          <Button type="submit" variant="primary" className="rounded-1 ">
            Guardar
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default FormularioColores;