var numeros = []
var tela = window.document.getElementById('num')
var opr;

function addNum(numero){
    switch(numero){
        case 1:
            tela.innerHTML += '1'; break;
        case 2:
            tela.innerHTML += '2'; break;
        case 3:
            tela.innerHTML += '3'; break;
        case 4:
            tela.innerHTML += '4'; break;
        case 5:
            tela.innerHTML += '5'; break;
        case 6:
            tela.innerHTML += '6'; break;
        case 7:
            tela.innerHTML += '7'; break;
        case 8:
            tela.innerHTML += '8'; break;
        case 9:
            tela.innerHTML += '9'; break;
        case 0:
            tela.innerHTML += '0'; break;
    }
}

function getNum_soma(){
        opr = 'soma'
        numeros[0] = parseFloat(tela.innerText)
        limpar()
}
function getNum_sub(){
        opr = 'sub'
        numeros[0] = parseFloat(tela.innerText)
        limpar()
}
function getNum_mult(){
        opr = 'mult'
        numeros[0] = parseFloat(tela.innerText)
        limpar()
}
function getNum_div(){
        opr = 'div'
        numeros[0] = parseFloat(tela.innerText)
        limpar()
}


function resultado(){
    numeros[1] = parseFloat(tela.innerText)
    limpar()
    
    let soma = somar(numeros[0], numeros[1])
    let sub = subtrair(numeros[0], numeros[1])
    let mult = multiplicar(numeros[0], numeros[1])
    let div = dividir(numeros[0], numeros[1])
    
    switch(opr){
        case 'soma': 
        tela.innerHTML = soma; 
        break;

        case 'sub': 
        tela.innerHTML = sub; 
        break;

        case 'mult': 
        tela.innerHTML = mult; 
        break;

        case 'div': 
        tela.innerHTML = div.toPrecision(6); 
        break;
    }
}

function somar(n1,n2){
    return n1+n2
}
function subtrair(n1,n2){
    return n1-n2
}
function multiplicar(n1,n2){
    return n1*n2
}
function dividir(n1,n2){
    return n1/n2
}

function limpar(){
    tela.innerHTML = ''
}