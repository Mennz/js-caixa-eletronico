# Caixa eletronico

Simulacao de um caixa eletronico rodando no terminal, feita em Node puro (sem
frameworks). O programa mostra um menu, guarda o saldo em memoria durante a
execucao e permite consultar saldo, depositar e sacar.

## O que pratiquei

- Loop de menu no terminal com `readline/promises` e `async/await`
- Validacao de entrada (valor negativo, texto que nao e numero, saldo
  insuficiente)
- Saque so aceita multiplos de 2, porque nao existe nota de 1 real
- Calculo de quais notas entregar no saque, usando um algoritmo guloso
  (comeca pela maior nota e vai descontando)
- Um bug real: usar a nota de 5 no calculo guloso podia deixar 1 real sem
  representar (ex: R$ 186). Resolvido tirando a nota de 5 da lista, ja que
  todo saque e multiplo de 2

## Como rodar

```bash
node index.js
```

O saldo comeca em R$ 1000,00. Escolha uma opcao do menu digitando o numero
e apertando Enter.
