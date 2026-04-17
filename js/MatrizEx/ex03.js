const matriz = [ //5x3
  [1.5, 2.0, 3.5],
  [4.0, 5.5, 6.0],
  [7.5, 8.0, 9.5],
  [2.0, 4.0, 6.0],
  [1.0, 3.0, 5.0]
];

let soma = 0;
let totalElementos = 0;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    soma += matriz[i][j];
    totalElementos++;
  }
}

let media = soma / totalElementos;
console.log("Média dos elementos =", media);