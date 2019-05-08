# Validação de cartão de crédito


**Esta biblioteca se destina à validação de numeros de cartão de crédito.**
Na versão atual é capaz de verificar se o numéro do cartão de crédito com 14, 15 ou 16 dígitos é válido ou invalido.

## Como instalar:

```shell

$  npm install validatorcard-lib-js

```

## Como utilizar:

```node

> const cardValidator = require('validatorcard-lib-js');
> console.log(cardValidator.cardValidator('4539983237489397'))
> // return "true"
> console.log(cardValidator.cardValidator('4539983237489'))
> // return "false"

```

## roadmap oficial do projeto

#### versão 1.0.0
- funcionalidade: Verifica se o numero do cartão de crédito é válido ou invalido, através do dígito verificador.
