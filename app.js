// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crea la lista de amigos
let amigos = [];

/*Función que permite ingresar la lista de amigos, valida si un valor es vació, si lo es, muestra el mensaje "Por favor inserte un nombre"
si el valor es validó lo agrega con .push() y limpia el campo de texto*/
function agregarAmigo(){

    let amigosUsuario = document.getElementById('amigo').value;

    if(amigos.length>=0 && amigosUsuario == ''){
        alert("Por favor, inserte un nombre.")
    }else{
        amigos.push(amigosUsuario);
        console.log(amigos);
        mostrarNombres(amigos);
        limpiarCaja();
    } 
}

//Función que permite mostrar los nombres conforme se van agregando
function mostrarNombres(listaAmigos){

    let elementoHTML = document.getElementById('listaAmigos');
    elementoHTML.innerHTML = "";

    for(posicion=0;posicion<listaAmigos.length;posicion++){
        let li = document.createElement('li');
        li.textContent = listaAmigos[posicion];
        elementoHTML.appendChild(li);
    }
}

//Función que permite mostrar el amigo secreto de manera aleatoria, limpiando en pantalla al lista de amigos previamente ingresada.

function sortearAmigo(){

    let amigoSecreto = Math.floor(Math.random()*amigos.length);
    let elementoAmigoHTML = document.getElementById('resultado');

    if(amigos.length==0){
        alert("Su lista de amigos esta vacía");
    }else{
        let elementoHTML = document.getElementById('listaAmigos');
        elementoHTML.innerHTML = "";
        elementoAmigoHTML.innerHTML = (`El amigo secreto sorteado es: ${amigos[amigoSecreto]}`);  
        //limpiarLista();    
    }
}
//Función que permite limpiar el cuadro de texto, cada vez que añada un nuevo nombre a la lista.

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}
//Función que permite limpiar la lista de amigos cuando la persona ya sorteo
/*function limpiarLista(){
    document.getElementById('listaAmigos').value = '';
    amigos = [];
}*/
