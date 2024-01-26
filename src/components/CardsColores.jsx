import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardsColores = ({ color, borrarColor, colorBorrado }) => {
  return (
    <Card className="my-3 pt-1 shadow" style={{ width: "18rem" }}>
      <div className="colorCard" style={{ background: color }}></div>
      <Card.Body>
        <Card.Title className="ms-1">{color.toUpperCase()}</Card.Title>
        <Button
          variant="danger"
          onClick={() => borrarColor(colorBorrado)}
        >
          Borrar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardsColores;
