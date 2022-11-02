-- Exercício 1 --

    - Adicione o código abaixo a uma página HTML e adicione uma tag script. Você deverá fazer tudo usando somente JavaScript.

    - Acesse o elemento elementoOndeVoceEsta.
    - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
    - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
    - Acesse o primeiroFilho a partir de pai.
    - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
    - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
    - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
    - Agora acesse o terceiroFilho a partir de pai.

-- Exercício 2 --


    - Crie um irmão para elementoOndeVoceEsta.
    - Crie um filho para elementoOndeVoceEsta.
    - Crie um filho para primeiroFilhoDoFilho.
    - A partir desse filho criado, acesse terceiroFilho.

-- Exercício 3 --

    -  Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

-- Exercício 4 --

 O objetivo desses exercícios é colocar em prática o seu conhecimento sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.

Comece criando algumas coisas:

    Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
    Adicione a tag main com a classe main-content como filho da tag body;
    Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
    Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
    Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
    Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
    Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
    Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
    Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

    Adicione a classe title na tag h1 criada;
    Adicione a classe description nas 3 tags h3 criadas;
    Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
    Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
    Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
    Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

