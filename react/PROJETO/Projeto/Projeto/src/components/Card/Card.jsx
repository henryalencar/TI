import "./Card.css";

const Card = ({ nome, preco, imagem }) => {
  return (
    <div className="card">
      <img src={imagem} alt={nome} className="card-img" />

      <div className="card-content">
        <h3>{nome}</h3>
        <p className="preco">{preco}</p>

        <button className="btn-detalhes">
          Ver detalhes
        </button>
      </div>
    </div>
  );
};

export default Card;