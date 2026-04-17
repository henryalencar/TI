import { useState } from "react";

const UseState = () => {

  let nome = "henry";
  const [name, setName] = useState("Lucas");

  return (
    <div>
        <br></br>
      <h2>Gerenciando Dados com UseState</h2>

      <button onClick={() => (nome = "Maria")}>
        Forma errada
        
     
      </button>

    <p>Nome: {nome}</p>

      <br></br>

      <button onClick={() => setName("Maria")}>
        Forma correta
        </button>
    
      <p>Nome: {name}</p>
      
      <br></br>
    </div>
  );
};

export default UseState;