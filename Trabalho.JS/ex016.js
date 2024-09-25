//Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). 
//A seguir, mostre a quantidade de valores positivos digitados.


let positivos = 0;
for (let i = 0; i < 6; ++i) {
    let numero = parseFloat(lines.shift().trim());

    if (numero > 0) ++positivos;
}

console.log(`${positivos} valores positivos`);