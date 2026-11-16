# Exercicios_dw_java_script
Respostas escritas - Etapas 0 a 4
Desenvolvimento Web I - Introdução ao JavaScript

ETAPA 0 - PREPARANDO O AMBIENTE

1. A mensagem "Olá, JavaScript!" apareceu na aba Console das ferramentas do desenvolvedor, aberta com F12.

2. O defer faz o navegador esperar o HTML ser lido por inteiro antes de executar o script. Isso vai ser importante quando o script precisar mexer em elementos da página, porque esses elementos já vão existir. Sem o defer, o script rodaria antes de o HTML ser lido e não encontraria nada, e o resultado seria null.

3. Se o HTML pedisse codigo.js mas o arquivo se chamasse script.js, o navegador não encontraria o arquivo. Apareceria um erro de arquivo não encontrado (404) no console e o script não seria executado, então a mensagem não apareceria.

ETAPA 1 - O QUE É JAVASCRIPT

Resultados observados no console: 2 + 3 deu 5. "Web" + " I" deu o texto "Web I". "5" + 3 deu o texto "53". "5" - 3 deu o número 2. 2 + 3 * 4 deu 14. (2 + 3) * 4 deu 20.

1. "5" + 3 e "5" - 3 dão resultados diferentes porque o operador + também serve para juntar textos. Quando um dos lados é texto, o JavaScript transforma o 3 em "3" e concatena, resultando em "53". Já o operador - só funciona com números, então o JavaScript converte "5" em número e faz a conta, resultando em 2.

2. 2 + 3 * 4 e (2 + 3) * 4 dão resultados diferentes por causa da ordem das operações. A multiplicação é feita antes da soma, então a primeira expressão vira 2 + 12, que é 14. Na segunda, os parênteses fazem a soma ser feita primeiro, então vira 5 * 4, que é 20.

ETAPA 2 - VARIÁVEIS E TIPOS

1. As quatro linhas com typeof imprimem, nesta ordem: string, number, boolean e undefined.

2. O erro que apareceu na última linha foi "TypeError: Assignment to constant variable". Ele ocorre porque escola foi declarada com const, e uma constante não pode ter o valor trocado depois de definido.

3. Entre os nomes, nota_final é válido e $total é válido. 3nota é inválido porque nome de variável não pode começar com número. nota-final é inválido porque o hífen não é permitido e seria lido como uma subtração. class é inválido porque é uma palavra reservada da linguagem.

4. O código imprime 16, porque idade começa com 15 e depois recebe ela mesma mais 1.

Nos testes por conta própria, o console.log(nota1) antes da linha do erro mostrou 9. Quando mudei para let nota1 = "8.5", com aspas, o typeof de nota1 passou a imprimir string.

ETAPA 3 - OPERADORES, CONVERSÃO E TEXTO COM VARIÁVEIS

1. As 8 linhas de saída são: 9 5 14, depois 3.5, depois 1, depois 49, depois "Olá, Ana! 7 dividido por 2 é 3.5.", depois 8.5, depois 7.51 e por fim NaN.

2. Number("7.5") + 1 converte o texto para o número 7.5 e soma 1, dando 8.5. Já "7.5" + 1 soma um texto com um número, então concatena e dá o texto "7.51". Para quem lê um número digitado em um campo de formulário, isso significa que o valor chega como texto, e por isso é preciso converter com Number() antes de fazer contas, senão o programa junta os valores em vez de somar.

3. 10 % 3 dá 1, porque o resto da divisão de 10 por 3 é 1. 2 ** 3 dá 8. 10 / 4 dá 2.5.

ETAPA 4 - CONDICIONAIS

1. Com temperatura igual a 20, aparece "Agradável", porque 20 >= 30 é falso e 20 >= 20 é verdadeiro, já que o >= inclui o limite. Com 30, aparece "Calor", porque 30 >= 30 é verdadeiro e o primeiro bloco já é executado. Com 19, aparece "Frio".

2. As saídas das quatro últimas linhas são true, false, true e false. Recomenda-se o === porque o == converte os tipos antes de comparar e dá resultados surpreendentes, como achar que 5 é igual a "5" ou que 0 é igual a false. O === exige o mesmo valor e o mesmo tipo, então o resultado é mais previsível.

3. A condição que é verdadeira apenas quando nota está entre 0 e 10, inclusive, é: nota >= 0 && nota <= 10.

