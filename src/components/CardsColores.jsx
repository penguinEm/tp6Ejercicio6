import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardsColores = () => {
  return (
    <Card className="my-3 pt-1 shadow" style={{ width: "18rem" }}>
      <div className="colorCard" style={{background: "blue"}}>

      </div>
      <Card.Body>
        <Card.Title className="ms-1">Red</Card.Title>
        <Button variant="danger">Borrar</Button>
      </Card.Body>
    </Card>
  );
};

export default CardsColores;
