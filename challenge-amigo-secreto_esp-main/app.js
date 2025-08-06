// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres=[];
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
        mostrarLista();
    }

}

//Deja en blanco la caja del imput
function limpiarTexto(DocumentoID){
    let valorCaja = document.querySelector(DocumentoID);
    valorCaja.value = '';
    return;
}

//Funcion para mostrar la lista de amigos
function mostrarLista(){        
    let lista = document.getElementById('listaAmigos');    
    //Muestra la lista
    for(i=0;i<listaNombres.length;i++){
       let li = document.createElement('li');
       li.innerText = listaNombres[i];
        lista.appendChild(li);
    }
}

function limpiarLista(){        
    let lista = document.getElementById('listaAmigos');    
    //Muestra la lista
    for(i=0;i<listaNombres.length;i++){
        lista.removeChild(lista.firstChild)
    }
}
