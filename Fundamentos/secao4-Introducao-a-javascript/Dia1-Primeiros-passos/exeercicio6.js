
let status = "aprovada";
let statusCandidato ="?";

switch(status){
    case 'aprovada':
        console.log("Parabéns, você foi aprovada(o)!");
        break
    case 'lista':
        console.log("Você está na nossa lista de espera");
        break
    case 'reporavada':
        console.log("Você foi reprovada(o)");
        break
    case 'default':
        console.log("Informação incorreta");
        break 
}