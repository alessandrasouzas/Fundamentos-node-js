const estudante = "Caroline";
const docente = 'Ana';
const cummprimento = "nosso lema é 'estudar bastante!'";
const citacao = `Ju diz: "nosso lema é 'estudar bastante!'"`;

console.log(cummprimento);
console.log(citacao);

// console.log('a estudante chama ' + estudante);

//template string
console.log(`a estudante chama ${estudante}`);

const senha = 'SenhaSegura123' + estudante.toUpperCase();

console.log(senha);