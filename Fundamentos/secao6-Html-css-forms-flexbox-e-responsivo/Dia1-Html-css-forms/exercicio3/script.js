const submitDefaultprevent = () => {
    let botaoSubmit = document.querySelector('#botao-submit');
    botaoSubmit.addEventListener('click', (event) => {
        event.preventDefault();
    })
}
window.onload = submitDefaultprevent ();

function limparFormulario() {
    let botaoLimpar = document.querySelector('#limpar');
    botaoLimpar.addEventListener('click', () => {
        const formElements = document.querySelectorAll('input');
        const textArea = document.querySelector('textarea');
        for (let index = 0; index < formElements.length; index += 1) {
            const userInput = formElements[index];
            userInput.value = '';
            userInput.checked = false;
        }
        textArea.value = '';
    })
}
limparFormulario();



  