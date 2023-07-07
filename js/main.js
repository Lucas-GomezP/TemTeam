//En este script se colocaran todas las funcionalidades generales como manejo de botones, cambios de clases para estilos, etc.

// BOTON INTRODUCCION
const introductionButton = document.getElementById('introduction-button');
const introduction = document.getElementById('introduction');

introductionButton.addEventListener('click', () => {
    introductionButton.classList.toggle('show-introduction');
    introduction.classList.toggle('introduction-hidden');
});


// FUNCIONAMIENTO DEL CAMBIO DE SLOTS DEL EQUIPO
// Utilizamos un querySelector para poder iterar sobre ellos con un forEach
const teamSlots = document.querySelectorAll('.team-slot');

// Creamos una funcion general para remover ciertas clases de un conjunto seleccionado
function removeClass(selectorGroup, className) {
    selectorGroup.forEach(selector => {
        selector.classList.remove(className);
    });
}

// Iteramos sobre cada slot para añadirle un evento al hacer click, lo que hara este evento es quitar la clase de 'active-slot' llamando a la funcion y luego le dara al slot que fue clickeado esa clase
teamSlots.forEach(slot => {
    slot.addEventListener('click', () => {
        removeClass(teamSlots, 'actual-slot');
        slot.classList.add('actual-slot');
    })
});