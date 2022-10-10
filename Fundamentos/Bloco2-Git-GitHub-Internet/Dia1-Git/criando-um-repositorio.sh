touch novorepositorio
cd novorepositorio

git init
code

touch README.md
git add .

commit -m "Criando arquivo README"

git checkout main

git merge alteracoes-no-readme

git checkout -b atualiza-readme
git checkout atualiza-readme

touch infos.txt
commit -m "Criando arquivo infos.txt"
echo "Yuri Toribio" > infos.txt

commit -m "adicionando nome e sobrenome no info.txt"
git checkout -b adiciona-infos
git checkout adiciona-infos

Echo "Para utilizarmos o versionamento o primeiro ponto passo é criar uma pasta em iniciar o versionamento com o git init.
Logo em seguida criamos algum arquivo dentro da pasta, pode ser com o comando touch. No caso desse exercicio começamos 
criando o arquivo README.md. Feita essa primeira alterção podemos adicionar ela pra começar a ser rastreada com o git add .
feito isso, criamos um commit pra essa alteração. Esse commmit contém informações sobre a alteraçao que foi feita. 
A partir de agora já podemos começar a criar as branchs necessárias para a continuação do projeto.

Para criar uma nova branch podemos usar o comando git checkout -b <nome da branch>. Quando criamos um nova branch estamos criando 
um novo espaço para trabalhar no projeto sem alterar os arquivos da branch principal. Após fazermos todas as alterações podemos
retornar para a branch principal e juntar as alterações na branch principal num processo chamado de merge.

Mas como nos fazemos isso? Utilizamos o comando  git merge <nome da branch>. Prontinho!! Juntamos as aslterações no branch principal
do projeto" > README.md

git add .
git commmit -m "Editando o README com informações sobre versionamento"

git checkout main
git merge adiciona-infos

