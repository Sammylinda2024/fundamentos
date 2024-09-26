//A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:


//Salário	Percentual de Reajuste
//0 - 400.00
//400.01 - 800.00
//800.01 - 1200.00
//1200.01 - 2000.00
//Acima de 2000.00

//5%
//12%
//10%
//7%
//4%

//Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

//ntrada
//A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

//Saída
//mprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, 
//conforme exemplo abaixo.

let salario = parseFloat(400.00);
let reajuste;

if (salario <= 400.00)
    reajuste = 15;
else if (salario <= 800.00)
    reajuste = 12;
else if (salario <= 1200.00)
    reajuste = 10;
else if (salario <= 2000.00)
    reajuste = 7;
else
    reajuste = 4;

console.log(`Novo salario: ${(salario * (1 + reajuste / 100.0)).toFixed(2)}`);
console.log(`Reajuste ganho: ${(salario * reajuste / 100.0).toFixed(2)}`);
console.log(`Em percentual: ${reajuste} %`);