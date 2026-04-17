const matriz = [ //4x44
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

for (let i = 0; i < 4; i++) {
  let linha = "";
  for (let j = 0; j < 4; j++) {
    linha += matriz[i][j] + " ";
  }
  console.log(linha);
}