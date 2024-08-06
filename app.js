let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else{
    
    // Si el numero generado esta en incluido en la lista

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

    }

   
}

//let numeroSecreto = generarNumeroSecreto(); 
console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);//conectar nuestros elementos con html
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //console.log(intentos);
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }

        intentos++;
        limpiarCaja();
        
    }

    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){

    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalor de numeros.
    condicionesIniciales();

    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    
}

condicionesIniciales();