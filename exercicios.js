// Exercicios de Fixaçao

// Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase em constras maiúsculas.
const frase = 'valda friends é refrescante';

console.log(`comprimento total: ${frase.length} letras`);
console.log(frase.toUpperCase());

// Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
let nome = null;
let sobrenome;

console.log(nome);
console.log(sobrenome);

// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
let nom = 'Ana';
let idade = 18;
let estudante = true;

console.log(`nome: ${nom}, idade: ${idade}, estuda: ${estudante}`);

// Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
let nomeEstudante = 'Ana';
let idadeEstudante = 15;

console.log('conversao number to string: ' + parseInt(nomeEstudante));
console.log('conversao string to number: ' + idadeEstudante.toString());
