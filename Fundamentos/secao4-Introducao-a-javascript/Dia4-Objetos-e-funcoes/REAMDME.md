-- Exercicio 1 --

Crie uma variável player e atribua um objeto contendo as variáveis listadas

-- Exercício 2 --

Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto. 

-- Exercício 3 --



Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

    Adição (a + b)
    Subtração (a - b)
    Multiplicação (a * b)
    Divisão (a / b)
    Módulo (a % b)

Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro. 

-- Exerecício 4 --

Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave.

nsira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor.

Faça um for/in que mostre todas as chaves do objeto.

Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console.
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves

-- Leitura de Objetos --

Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

Adicione um novo livro favorito na chave livrosFavoritos, que é um array.

Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

-- Exercicio 5 --

gora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

A manipulação de arrays pode ser complexa em alguns momentos e, por isso, o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada. Se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e, sempre que um método novo for necessário, ele será ensinado a você.

Spoiler-alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.

    Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

        Exemplo de palíndromo: arara

        verificaPalindrome('arara')
            Retorno esperado: true

        verificaPalindrome('desenvolvimento')
            Retorno esperado: false

    Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

        Array de teste: [2, 3, 6, 7, 10, 1];.

        Valor esperado no retorno da função: 4.

    Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

        Array de teste: [2, 4, 6, 7, 10, 0, -3];.

        Valor esperado no retorno da função: 6.

    Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

        Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

        Valor esperado no retorno da função: Fernanda.

    Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

        Array de teste: [2, 3, 2, 5, 8, 2, 3];.

        Valor esperado no retorno da função: 2.

    Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

        Valor de teste: N = 5.

        Valor esperado no retorno da função: 1+2+3+4+5 = 15.

    Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

        Valor de teste: 'trybe' e 'be'

        Valor esperado no retorno da função: true

        verificaFimPalavra('trybe', 'be');
            Retorno esperado: true

        verificaFimPalavra('joaofernando', 'fernan');
            Retorno esperado: false



