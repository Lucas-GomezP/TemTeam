// En este script se colocara todo el funcionamiento de la seccion de Team Builer

// Seteamos la url base de nuestra API, luego de ese string se concatenara el resto de los apartados dependiendo que informacion necesitemos
const baseUrl = 'https://temtem-api.mael.tech/api/';

// Creamos una funcion para corroborar la respuesta de la API en cada promesa realizada
const isResponseOk = (response) => {
    //response.ok va a ser true con respuestas 2xx, esto lo hacemos para poder captar correctamente el error en caso de que se de
    if (!response.ok) {
        throw new Error('Error HTTP: ' + response.status);
    }
    return response.json();
}

// fetch(baseUrl+'temtems')
//     .then(response => isResponseOk(response))
//     .then(data => console.log(data))
//     .catch(error => console.error(error));



// obtenemos el input del nombre del temtem
const nameTemtem = document.getElementById('name-temtem');


const searchTemtem = search => {
    const result = fetch(baseUrl+'temtems')
        .then(response => isResponseOk(response))
        .then(data => console.log(data))
        .catch(error => console.error(error));

    result.forEach()
    // flaquito, termina esta parte de la busqueda por nombres iterando sobre el array
}




// el evento input se dispara cuando el value es cambiado
nameTemtem.addEventListener('input', () => searchTemtem(nameTemtem.value));

