const pessoaEstudante ={};

const adicionaPropriedade = (objetoParaModificacao, novaPropriedade, valor) => {
    objetoParaModificacao [novaPropriedade] = valor;
}

adicionaPropriedade(pessoaEstudante, 'nome', 'Yuri Toríbio');
adicionaPropriedade(pessoaEstudante, 'email', 'yuritoribio@gmail.com');
adicionaPropriedade(pessoaEstudante, 'telefone', '31 98641-5389');
adicionaPropriedade(pessoaEstudante, 'github', 'https://github.com/YuriToribio');
adicionaPropriedade(pessoaEstudante, 'linkedIn', 'https://www.linkedin.com/in/yuri-toribio-b603861a6/');