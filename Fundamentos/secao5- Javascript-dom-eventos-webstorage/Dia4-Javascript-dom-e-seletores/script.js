// Função pra mudar a cor de fundo / style.backgroundColor
// script capturar a id correspondente, adicionar um evento, adicionar uma função

const mudaBackground = () => {

    let capturaBotoesBackground = document.querySelectorAll('#cor-de-fundo>button');
    let body = document.querySelector("#body");
        for(i=0; i<capturaBotoesBackground.length; i+=1){
            capturaBotoesBackground[i].addEventListener('click',(evento) => {
                body.style.backgroundColor= evento.target.innerHTML;
                localStorage.setItem('background',body.style.backgroundColor);
            })
        }
}
mudaBackground();

// Funçao pra mudar a cor da fonte / style.color
// script capturar a id correspondente, adicionar um evento, adicionar uma função
const mudaCorDaFonte = () => {

    let capturaBotoesCorFonte = document.querySelectorAll('#cor-da-fonte>button');
    let main = document.querySelector("#main");
        for(i=0; i<capturaBotoesCorFonte.length; i+=1){
            capturaBotoesCorFonte[i].addEventListener('click',(evento) => {
                main.style.color= evento.target.innerHTML;
                localStorage.setItem('fontColor',main.style.color);
            })
        }
}
mudaCorDaFonte();

// Função pra mudar o tamanho da fonte / style.fontSize
// script capturar a id correspondente, adicionar um evento, adicionar uma função
const mudaTamanhoDaFonte = () => {

    let capturaBotoesTamanhoFonte = document.querySelectorAll('#tamanho-da-fonte>button');
    let paragrafos = document.querySelectorAll(".paragrafo");
        for(i=0; i<capturaBotoesTamanhoFonte.length; i+=1){
            capturaBotoesTamanhoFonte[i].addEventListener('click',(evento) => {

                for(i=0; i<paragrafos.length; i+=1){
                    paragrafos[i].style.fontSize= evento.target.innerHTML;
                    localStorage.setItem('fontSize', paragrafos[i].style.fontSize); 
                }
            

            })
        }
}
mudaTamanhoDaFonte();

// Função pra mudar  o espaçamento entre as linhas / style.lineHeight
// script capturar a id correspondente, adicionar um evento, adicionar uma função

const mudaEspacamentoLinhas = () => {

    let capturaBotoesEspacamento= document.querySelectorAll('#espacamento-entre-linhas>button');
    let paragrafos = document.querySelectorAll(".paragrafo");
  
        for(i=0; i<capturaBotoesEspacamento.length; i+=1){
            capturaBotoesEspacamento[i].addEventListener('click',(evento) => {

                for(i=0; i<paragrafos.length; i+=1){
                    paragrafos[i].style.lineHeight= evento.target.innerHTML;
                    localStorage.setItem('fontHeight', paragrafos[i].style.lineHeight); 
                }
            })
        }
}
mudaEspacamentoLinhas();    

// Função pra mudar o tipo de fonte /style.fontFamily
// script capturar a id correspondente, adicionar um evento, adicionar uma função 

const mudaFontFamily = () => {

    let capturaFontFamily= document.querySelectorAll('#tipo-de-fonte>button');
    let paragrafos = document.querySelectorAll(".paragrafo");
  
        for(i=0; i<capturaFontFamily.length; i+=1){
            capturaFontFamily[i].addEventListener('click',(evento) => {

                for(i=0; i<paragrafos.length; i+=1){
                    paragrafos[i].style.fontFamily= evento.target.innerHTML;
                    localStorage.setItem('fontFamily', paragrafos[i].style.fontFamily); 
                }
            })
        }
}
mudaFontFamily();    