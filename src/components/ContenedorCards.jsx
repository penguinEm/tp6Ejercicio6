import CardsColores from "./CardsColores";

const ContenedorCards = ({arrayColores}) => {
  return (
    <div className="mb-5 d-flex justify-content-around row">
     {
        arrayColores.map((color, posicionColor) => <CardsColores key={posicionColor}></CardsColores>)
     }
     
      
    </div>
  );
};

export default ContenedorCards;
