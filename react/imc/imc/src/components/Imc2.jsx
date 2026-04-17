import React, { useState, useEffect } from 'react';

const Imc2 = () => {
  const peso = 70;   // kg
  const altura = 1.75; // m
  const [resultado, setResultado] = useState('');

  useEffect(() => {
    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else classificacao = 'Obesidade';

    setResultado(`Peso: ${peso} kg, Altura: ${altura} m → IMC: ${imc.toFixed(2)} (${classificacao})`);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Calculadora de IMC</h2>
      <p>{resultado}</p>
    </div>
  );
};

export default Imc2;