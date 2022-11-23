-- Exercício 1 --

 Para os seguintes exercícios você não precisará alterar o arquivo HTML, apenas o CSS. 😉

    A primeira div só poderá aparecer se nossa tela possuir largura mínima de 500px.

    A segunda div só poderá aparecer se a largura estiver entre 600px e 1000px.

    A terceira div não deverá aparecer se nossa tela possuir largura entre 650px e 950px.

    Sem alterar a classe trick, faça com que o texto dela apareça somente quando a tela estiver com menos de 500px de largura.
    
-- Exercício 2 --

Criar uma página para uma tela pequena

Agora que você aprendeu como criar layouts específicos para diferentes tamanhos de tela, vamos colocar as mãos na massa! 💻📲

 Realize as seguintes tarefas:

    Faça o tamanho da fonte ser maior;

    Faça o tamanho da fonte dos elementos h1 ser menor;

    Aumente o espaçamento entre as figuras;

    Adicione um pouco de margin na página.



    Agora que temos um padrão, vamos criar um breakpoint para telas menores de laptops. Para isso nós podemos consultar nossa tabela acima e utilizar o min-width: 768px e quando tivermos em telas menores que 768px esse estilo não vai ser aplicado. Esse será o primeiro breakpoint do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar. Ok?

    Crie uma media query no seu arquivo CSS, usando a dimensão em pixels que você guardou como o min-width que foi apresentado acima.

    Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito);

    Ajuste o tamanho da fonte;

    Ajuste as margens da página;

    Faça as imagens serem mostradas em duas colunas.

    Agora, você vai criar outro breakpoint para telas grandes, como por exemplo, desktops. Para isso você pode consultar novamente nossa tabela com os tamanhos.

    Crie uma nova media query no seu arquivo CSS usando a dimensão para telas de desktop e realize os seguintes ajustes dentro do breakpoint (aqui podemos usar o tamanho de tela de 992px):

        Altere a cor de fundo;

        Ajuste o tamanho da fonte;

        Ajuste as margens da página;

        Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.
        
-- Exercício 3 --    

    Utilizando a abordagem mobile first e media queries, crie três versões de layout diferentes para essa página. Cada layout deve corresponder a um tamanho diferente de página (pequeno, médio e grande). Faça pelo menos um commit para cada layout;

    Para fazer isso de forma adequada, você deve prestar atenção no conteúdo da página e pensar em como mostrá-lo em cada um dos tamanhos de tela:

    Onde a lista de capítulos deve estar posicionada?

    Como a história deve ser mostrada?

    Como o cabeçalho deve ser posicionado?

    O que fazer com as informações do autor em cada tamanho de tela?

    Talvez você precise alterar o HTML um pouco, adicionando elementos para facilitar a estilização, ou talvez mudando um bloco de lugar dentro da página.

-- Exercício 4 -- 

 Realize as seguintes tarefas:

    Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com a imagem abaixo quando ela for impressa. Especificamente:

    Os elementos com id header, navigation e footer devem desaparecer;

    O elemento com id aside deve ser mostrado abaixo do conteúdo principal.

    Adicione uma media query no arquivo CSS e as regras necessárias para que a página se pareça com as imagens abaixo quando a tela for redimensionada para larguras menores. Especificamente:

    O elemento com id aside deve desaparecer;

    O elemento body não deve ter padding;

    As imagens não devem exceder a largura da tela;

    Os itens dentro do elemento navigation devem aparecer cada um em sua própria linha;

    O elemento com id header deve ser fixo, de forma que ele fique aparecendo sempre no topo da tela, mesmo após a pessoa usuária rolar a página.



