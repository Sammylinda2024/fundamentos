//Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias
//Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
//Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364.
//Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

let dias = parseInt(lines.shift());

let anos = Math.floor(dias / 365);
dias %= 365;
let meses = Math.floor(dias / 30);
dias %= 30;

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);