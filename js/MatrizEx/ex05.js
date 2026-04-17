const matriz = [  //5x5
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15], 
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

let soma = 0;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    soma += matriz[i][j];
  }
}

console.log("Soma total dos elementos =", soma); // vai dar 325