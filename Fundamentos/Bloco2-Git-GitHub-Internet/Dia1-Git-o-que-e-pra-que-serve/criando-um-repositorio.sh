#Crie uma pasta no seu computador; 
touch novorepositorio

#Acesse a pasta que você acabou de criar; 
cd novorepositorio

#Inicie o versionamento com o comando git init
git init

#Abra a pasta no VSCode com o comando code .
code

#Crie um arquivo chamado README.md
touch README.md

#Adicione o arquivo novo em staging e realize um commit
git add .
commit -m "Criando arquivo README"

#Crie uma nova branch com o comando git checkout -b
git checkout -b adiciona-readme

#Faça uma alteração no README.me e retorne para a branch main 

echo "Fazendo a primeira alteração no readme" > readme.md
git checkout main

#Realize o merge das alterações com o comando git merge nome-da-branch

git merge adiciona-readme

#Acesse a branch main e crie uma branch nova chamada atualiza-readme; 
git checkout -b atualiza-readme


#Acesse a branch atualiza-readme e crie um arquivo chamado infos.txt
git checkout atualiza-readme
touch infos.txt


#Adicione as alterações em staging e realize um commit
commit -m "Criando arquivo infos.txt"

#Adicione seu nome e sobrenome no arquivo infos.txt
echo "Yuri Toribio" > infos.txt

#Adicione novamente as alterações em staging e realize um commit
commit -m "adicionando nome e sobrenome no info.txt"

#Crie uma branch nova a partir da branch atualiza-readme. A nova branch deve se chamar adiciona-infos
git checkout -b adiciona-infos
git checkout adiciona-infos


#Acesse a branch adiciona-infos e utilize sua criatividade para escrever o passo a passo de como o versionamento funciona no README.md
Echo "Para utilizarmos o versionamento o primeiro ponto passo é criar uma pasta em iniciar o versionamento com o git init.
Logo em seguida criamos algum arquivo dentro da pasta, pode ser com o comando touch. No caso desse exercicio começamos 
criando o arquivo README.md. Feita essa primeira alterção podemos adicionar ela pra começar a ser rastreada com o git add .
feito isso, criamos um commit pra essa alteração. Esse commmit contém informações sobre a alteraçao que foi feita. 
A partir de agora já podemos começar a criar as branchs necessárias para a continuação do projeto.

Para criar uma nova branch podemos usar o comando git checkout -b <nome da branch>. Quando criamos um nova branch estamos criando 
um novo espaço para trabalhar no projeto sem alterar os arquivos da branch principal. Após fazermos todas as alterações podemos
retornar para a branch principal e juntar as alterações na branch principal num processo chamado de merge.

Mas como nos fazemos isso? Utilizamos o comando  git merge <nome da branch>. Prontinho!! Juntamos as aslterações no branch principal
do projeto" > README.md #Foi escolha minha reescrever por cima do que já estava dentro do arquivo readme.md


#Adicione as alterações em staging, realize o commit
git add .
git commmit -m "Editando o README com informações sobre versionamento"

#Volte para a branch atualiza-readme e realize o merge das alterações feitas na branch adiciona-infos
git checkout atualiza-readme
git merge adiciona-infos


#Retorne para a branch main e realize o merge das alterações. 
git checkout main
git merge atualiza-readme

