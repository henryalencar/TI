const matriz = [  //6x2
  [1, 6],
  [7, 2],
  [8, 4],
  [3, 9],
  [10, 5],
  [6, 1]
];

let contador = 0;

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 2; j++) {
    if (matriz[i][j] > 5) { 
      contador++; 
    }
  }
}

console.log("Quantidade de elementos maiores que 5 =", contador);