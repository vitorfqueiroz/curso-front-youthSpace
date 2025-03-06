// for (let i = 1; i <= 5; i++) {
//     console.log(i) // 1, 2, 3, 4, 5
// }

// for (let j = 5; j >= 1; j--) {
//     console.log(j) // 5, 4, 3, 2, 1
// }

// let soma = 0
// for (let n = 1; n <= 10; n++) {
//     soma += 1
//     console.log(soma)
// }

// let frutas = ["maça", "banana", "laranja", "uva"]
// for (let m = 0; m < frutas.legth; i++) {
//     console.log(frutas[i])j
// }

// let numbers = [1, 2, 3, 4]
// for (let num = 0; num < numbers.length ; num++) {
// console.log(numbers[num] * 2)
// }

// let numero = 5
// for (let i= 1; i <= 10; i++) {
//     console.log(${numero} x ${i} = ${numero * i})
// }

// function fatorial(n) {
//     let resultado = 1;
//     for (let i = 1; i <= n; i++) {
//       resultado *= i;
//     }
//     return resultado;
//   }
//   console.log(fatorial(6)); 

//   let numero = 6
//   let fatorial = 1
//   for (let f = 1; f <= numero; f++) {
//     fatorial = fatorial * f;
//     console.log(fatorial)
//   }

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6], 
//     [7, 8, 9]
// ];

// for (let m = 0; m < matriz.length; m++) {
//     for (let n = 0; n < matriz[m].length; n++) {
//         console.log(matriz[m][n])   
//     }
  
// }

// let i = 1
// while (i <= 5) {
//     console.log(i)
//     i++
// }       

// let i = 10
// while (i >= 0) {
//     console.log(i)
//     i--
// }

// let numero = 5;
// let i = 1;

// while(i <= 10) {
// console.log(`${numero} x ${i} = ${numero * i}`);
// i++
// };

// //
// let nota = Number(prompt("Digite sua nota: "));
// let resultado = nota
// if (nota > 7){
//     console.log(`Sua nota ${resultado} está acima da média. Você está aprovado`)
// } else {
//     console.log(`Sua nota ${resultado} foi abaixo da média. Você está reprovado`)
// }
// //
// let nota1 = 2;
// let nota2 = 2;
// let nota3 = 2;
// let nota4 = 2;
// let média = (nota1 + nota2 + nota3 + nota4) / 4;

// if (média >= 7) {
//     console.log("Aprovado");
// }
// else {
//     console.log("Reprovado");
// }

function timeForMilkAndCookies (date) {
    const month = date.getMonth(); // pega o mês de 0 a 11 (based 0)
    const day = date.getDate();// pega o dia do mês anterior
    if (month === 11 || month === 0 && day === 24 || day === 1) { // valida se o mês é 11 e o dia é 24
        return true;
    } else {
        return false;
    }
}

console.log(timeForMilkAndCookies(new Date(2025, 11, 24)));
console.log(timeForMilkAndCookies(new Date(2025, 0, 1)));   