const readline = require("readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
        console.log("ainda nao implementado");
        break;
      case "2":
        console.log("ainda nao implementado");
        break;
      case "3":
        console.log("ainda nao implementado");
        break;
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
