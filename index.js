const readline = require("readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let saldo = 1000;

// so notas pares, porque so aceito saque em multiplo de 2 (sem a nota de 5)
const notasDisponiveis = [100, 50, 20, 10, 2];

function calcularNotas(valor) {
  let resto = valor;
  const notas = {};

  for (const nota of notasDisponiveis) {
    const quantidade = Math.floor(resto / nota);
    if (quantidade > 0) {
      notas[nota] = quantidade;
      resto = resto - quantidade * nota;
    }
  }

  return notas;
}

function mostrarNotas(notas) {
  console.log("Notas entregues:");
  for (const nota in notas) {
    console.log(`  ${notas[nota]}x R$ ${nota}`);
  }
}

function mostrarMenu() {
  console.log("");
  console.log("=== Caixa eletronico ===");
  console.log("1 - Consultar saldo");
  console.log("2 - Depositar");
  console.log("3 - Sacar");
  console.log("4 - Sair");
}

async function rodar() {
  let rodando = true;

  while (rodando) {
    mostrarMenu();
    const opcao = await rl.question("Escolha uma opcao: ");

    switch (opcao.trim()) {
      case "1":
        console.log(`Seu saldo e R$ ${saldo.toFixed(2)}`);
        break;
      case "2": {
        const valorTexto = await rl.question("Quanto deseja depositar? R$ ");
        const valor = Number(valorTexto);

        if (isNaN(valor) || valor <= 0) {
          console.log("valor invalido");
          break;
        }

        saldo = saldo + valor;
        console.log(`Deposito feito. Novo saldo: R$ ${saldo.toFixed(2)}`);
        break;
      }
      case "3": {
        const valorTexto = await rl.question("Quanto deseja sacar? R$ ");
        const valor = Number(valorTexto);

        if (isNaN(valor) || valor <= 0) {
          console.log("valor invalido");
          break;
        }

        if (valor > saldo) {
          console.log("saldo insuficiente");
          break;
        }

        // menor nota e 2, entao so aceita multiplo disso
        if (valor % 2 !== 0) {
          console.log("so aceito valores multiplos de 2");
          break;
        }

        saldo = saldo - valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} feito. Novo saldo: R$ ${saldo.toFixed(2)}`);
        mostrarNotas(calcularNotas(valor));
        break;
      }
      case "4":
        console.log("ate mais!");
        rodando = false;
        break;
      default:
        console.log("opcao invalida");
    }
  }

  rl.close();
}

rodar();
