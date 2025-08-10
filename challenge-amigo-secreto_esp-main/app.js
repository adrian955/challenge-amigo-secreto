// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de amigos en el documento html
let lista = document.getElementById('listaAmigos');
//resultado en el html
let resultado = document.getElementById('resultado');
//Arreglo con los numeros ingresados
let listaNombres=[];
//Variable para el numero aleatorio 
let numGen = 0;
//Funcion para cambiar texto en el archivo html
function asignacionTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;
}

//Funcion para agregar un nombre a la lista de amigos
function agregarAmigo(){

    let nombreAmigo = document.getElementById('amigo').value;
    //Validacion
    if(nombreAmigo == null|| nombreAmigo==''){
        alert('Por favor, ingrese un nombre');
    }else{
        listaNombres.push(nombreAmigo);
        console.log(listaNombres);
        limpiarTexto('#amigo');     
        lista.innerHTML=''       
        mostrarLista();

    }

}

//Deja en blanco la caja del input
function limpiarTexto(DocumentoID){
    let valorCaja = document.querySelector(DocumentoID);
    valorCaja.value = '';
    return;
}

//Funcion para mostrar la lista de amigos
function mostrarLista(){               
    //Muestra la lista
    for(i=0;i<listaNombres.length;i++){
       let li = document.createElement('li');
       li.innerText = listaNombres[i];
        lista.appendChild(li);
    }
}

// Sortea un nombre de la lista de manera aleatoria
function sortearAmigo(){
    //Limpia el resultado anterior
    resultado.innerHTML = ''
    //Verifica si hay nombres disponibles para sortear
    if (listaNombres.length == 0){
        alert('No hay nombres en la lista')
    }else{
        numGen = Math.floor(Math.random()*listaNombres.length); 
        console.log(numGen);     
        let li = document.createElement('li');
        li.innerText = listaNombres[numGen];
        resultado.appendChild(li);
    }
}