// En este archivo se crearan varias funciones generales necesitadas en varias partes del codigo.

// Creamos una funcion para obtener el slot actual en el que se encuentra el usuario
function getCurrentSlot() {
    // Obtenemos el boton del slot que tenga la clase actual-slot, ademas de esa clase tendra la clase team-slotX donde X el numero del slot correspondiente
    const actualSlot = document.querySelector('.actual-slot');
    // Iteramos sobre la informacion de nuestros objetos creados para cada slot e ingresamos al que corresponda al numero del actual-slot para retornarlo
    for (let slot of teamSlotsInfo) {
        if (slot.teamSlot === actualSlot.classList[0]) {
            return slot;
        }
    }
}

function updateSlotData() {
    const inputName = document.getElementById('name-temtem');
    const numberTemtem = document.getElementById('number-temtem')
    const typeImages = document.getElementById('type-images-container');
    const imageTemtem = document.getElementById('image-temtem');
    const statsBase = document.querySelectorAll('.stat-base');
    const wikiLink = document.getElementById('wiki-url');

    // Obtenemos el slot actual para luego poder corrsponder toda la informacion del temtem pertinente
    const slot = getCurrentSlot();

    inputName.value = slot.name;

    numberTemtem.innerHTML = slot.number;
    
    let imagesTypeHTML = '';
    slot.types.forEach(async type => {
        imagesTypeHTML += `<img src="https://temtem-api.mael.tech/images/icons/types/${type}.png" alt=${type} title=${type}>`;
    });
    typeImages.innerHTML = imagesTypeHTML;

    imageTemtem.setAttribute('src', slot.portrait);

    let i = 0;
    for (let stat in slot.stats) {
        statsBase[i].value = slot.stats[stat];
        i++;
    }

    wikiLink.setAttribute('href', slot.wikiUrl);

    // Ademas de actualizar toda la informacion en el teambuilder, agregamos la foto al boton para identificarlo mas facilmente
    const actualButton = document.querySelector('.actual-slot');
    actualButton.innerHTML = `<img src=${slot.portrait}>`;
}

// Creamos una funcion que habilitara los campos de las stats para editarlas siempre y cuando se haya elegido un TemTem antes
function enableEditingStats() {
    const tvsRange = document.querySelectorAll('input[class^="stat-tvs-range"]');
    const tvsStat = document.querySelectorAll('input[class^="stat-tvs"]');

    const slot = getCurrentSlot();

    // En caso de que el TemTem ya haya sido elegido se podran modificar sus stats, en caso contrario se bloquearan
    if (slot.eneableEditingStats) {
        tvsRange.forEach(tvRange => {
            tvRange.removeAttribute('disabled');
        });
    
        tvsStat.forEach(tvStat => {
            tvStat.removeAttribute('readonly');
        });
    } else {
        tvsRange.forEach(tvRange => {
            tvRange.setAttribute('disabled', '');
            tvRange.value = 0;
        });
    
        tvsStat.forEach(tvStat => {
            tvStat.setAttribute('readonly', '');
            tvStat.value = 0;
        });
    }
}

