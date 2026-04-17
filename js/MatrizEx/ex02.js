const matriz = [ //3x3
  [3, 2, 1],
  [5, 9, 3],
  [2, 8, 1]
];

for (let i = 0; i < 3; i++) {
  let soma = 0;
  for (let j = 0; j < 3; j++) {
    soma += matriz[i][j];
  }
  console.log(`Linha ${i + 1} Soma = ${soma}`);
}