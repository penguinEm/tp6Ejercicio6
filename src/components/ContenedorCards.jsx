import CardsColores from "./CardsColores";

const ContenedorCards = ({ arrayColores, borrarColor, colorBorrado }) => {
  return (
    <div className="mb-5 d-flex justify-content-around row">
      {arrayColores.map((color, posicionColor) => (
        <CardsColores
          key={posicionColor}
          color={color}
          borrarColor={borrarColor}
          colorBorrado={color}
        ></CardsColores>
      ))}
    </div>
  );
};

export default ContenedorCards;
