-- Exercício 1 --

 Vamos praticar um pouco, criando uma tela de login? 🔥

    - Adicione os campos de entrada para email e senha.
    - Adicione um checkbox com o texto Lembre-me.
    - Adicione um botão com o texto Entrar; crie o botão através da tag <input>.
    - Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.
    - Adicione o atributo required para os campos de email e senha.
    - Adicione o atributo autocomplete="off" para o campo de email.
    - Adicione o atributo autofocus para o campo de email.

-- Exercício 2 --

    Crie um arquivo HTML index.html.
    Crie um arquivo Javascript script.js.

    Em seu arquivo HTML:
        Adicione o <script src="script.js"></script> no final do body do HTML.
        Copie os três elementos abaixo (a, input type="text", checkbox) em sua página

    Em seu arquivo Javascript.
        Adicione os seletores abaixo no começo do arquivo.

    Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método .preventDefault() para prevenir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.

    Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método .preventDefault() para prevenir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

    Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra ‘a’ minúscula) possa ser digitado na caixinha. (dica: para capturar a tecla digitada, utilize o event.key)
 
-- Exercício 3 --

    O exercício hoje será desenvolver uma página web com o formulário da TrybeTrip. Desenvolva-o em um arquivo chamado form.html.

     Dicas:

    Crie o costume de adicionar IDs a elementos únicos e classes a elementos com comportamentos similares, pois isso facilitará muito sua vida como pessoa desenvolvedora;
    Procure saber mais sobre as Tags <label> e <fieldset> clicando nas documentações a seguir:
        Label;
        Fieldset.

    O formulário deverá permitir que a pessoa usuária insira os seguintes campos:

        Nome Completo:
            Limitado entre 10 e 40 caracteres.

        E-mail:
            Limitado entre 10 e 50 caracteres.

        Destino Preferido:
            4 opções: Cidade, Campo, Praia, Montanhas.

        Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
            Limite de 500 caracteres.

        Qual a melhor data para realizar sua viagem?

        Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?

        Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.

    Esses serão os principais campos utilizados nos próximos exercícios.

        Crie um botão para enviar as informações preenchidas.

    Agora vamos utilizar um pouco de javascript. Para isso, crie o arquivo script.js e o referencie no HTML.

        Dica: Coloque a tag <script> no final do seu body.

        Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().

        Crie um botão que limpe as informações contidas nos campos.

        (Bônus) A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.

        (Bônus) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’. Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela.


