// mensagem no console e no alert
console.log('Usando Javascript');
console.log('fsdffsdf');
// alert('Usando Javascript');

// variáveis
let nomeGame = 'God of War';
let anoLancamento = 2005;
let finalizado = true;

// exibir as variáveis
console.log(nomeGame);
console.log(anoLancamento);
console.log(finalizado);

// concatenação não é legal em Javascript
console.log('Nome do game: ' + nomeGame + ' Finalizado: ' + finalizado);

// legal é usar Template String
// Iniciar e terminar com crase
console.log(`Nome do Game: ${nomeGame}
data do lançamento: ${anoLancamento}
jogo finalizado: ${finalizado}`);

// alert(`Nome do Game: ${nomeGame}
// data do lançamento: ${anoLancamento}
// jogo finalizado: ${finalizado}`);

nomeGame = 'Alex Kid';
anoLancamento = 1986;
console.log(`Nome do Game: ${nomeGame}
data do lançamento: ${anoLancamento}    
jogo finalizado: ${finalizado}`);

//constantes = declaramos um valor e esse valor não
// poderá mudar

const codigoGame = 987654;
console.log(`Código do Game: ${codigoGame}`);
// Gera um erro pois foi declarado como constante
// codigoGame = 321654;


//arrays (vetores)
const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', "Eles"];
console.log(pessoas);
console.log(pessoas[3]);
pessoas[3] = 'Tati';
console.log(pessoas);

// Montar um objeto
const jogador = { 
    id: 99999,
    nome: 'Israel Marques',
    email: 'profisrael@fiap.com.br',
    logado: false
}

console.log(jogador);
console.log(jogador.email);
