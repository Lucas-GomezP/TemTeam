// BOTON INTRODUCCION
const introductionButton = document.getElementById('introduction-button');
const introduction = document.getElementById('introduction');

introductionButton.addEventListener('click', () => {
    introductionButton.classList.toggle('show-introduction');
    introduction.classList.toggle('introduction-hidden');
});


















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

fetch(baseUrl+'temtems')
    .then( (response) => isResponseOk(response) )
    .then( (data) => console.log(data) )
    .catch( (error) => console.error(error) );