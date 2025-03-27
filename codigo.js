const DinheiroCaixa = [50, 20, 10, 1];

function validacaoNumeroInteiro(valor) {
    let numero = parseInt(valor);
    if (isNaN(numero) || numero <= 0) {
        console.log("Por favor, insira um número inteiro válido.");
        return null;
    }
    return numero;
}

function retirarDinheiro(valor) {
    let numero = validacaoNumeroInteiro(valor);
    if (numero === null) {
        return;
    }

    let cedulas = {};
    let valorOriginal = numero;

    for (let cedula of DinheiroCaixa) {
        if (numero >= cedula) {
            let quantidade = Math.floor(numero / cedula);
            cedulas[cedula] = quantidade;
            numero -= quantidade * cedula;
        }
    }

    if (numero > 0) {
        console.log(`O valor R$${valorOriginal} não pode ser retirado com as cédulas disponíveis.`);
    } else {
        console.log(`Cédulas para retirar R$${valorOriginal}:`);
        for (let [cedula, quantidade] of Object.entries(cedulas)) {
            console.log(`R$${cedula}: ${quantidade}x`);
        }
    }
}

// Testes
retirarDinheiro(380);
retirarDinheiro(37);
retirarDinheiro(9);