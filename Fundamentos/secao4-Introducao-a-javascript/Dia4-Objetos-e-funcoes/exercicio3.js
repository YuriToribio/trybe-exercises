
const sum = (a, b) => a+b;
const subtraction = (a, b) => a-b;
const multiplication = (a,b) => a*b;
const division =(a,b) => a/b;

const module = (a,b) => a%b;

function highestNumberOfTwo (a,b){
    let aux = b;
    if(a>b){
        aux=a;
    }
    return a;
}

function higestNumerOfThree (a,b,c){
    let aux=c;
    if(a>b && a>c){
        aux=a;
    }
    else if (b>a && b>c){
        aux=b;
    }
    return aux;
}

function sign (a){
    let aux;
    if(a>0){
        aux='Positive';
    }
    else if (a<0){
        aux='Negative';
    }
    else{
        aux='Zero';
    }
    return aux;
}

function verifiesTriangle (a,b,c){

    let aux;

    function checkAngle(a,b,c){

        let aux2=true;
    
        if(a<0 || b<0 || c<0){
            aux2= false;
        }
        return aux2;
    }

    if (checkAngle(a,b,c)===false){
        aux='Erro';
    }
    else if( (checkAngle(a,b,c)===true) && ( a+b+c>180 || a+b+c<180 )){
        aux= false;
    }
    else if (a+b+c===180){
        aux=true;
    }
    
    return aux;
}


console.log(verifiesTriangle(-10,30,40));
console.log(verifiesTriangle(100,100,40));
console.log(verifiesTriangle(10,10,40));
console.log(verifiesTriangle(45,45,90));



