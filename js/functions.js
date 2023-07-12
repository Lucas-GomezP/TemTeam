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
    const ability = document.getElementById('ability-temtem');
    const typeImages = document.getElementById('type-images-container');
    const imageTemtem = document.getElementById('image-temtem');
    const statsBase = document.querySelectorAll('.stat-base');
    const tvsStatsRange = document.querySelectorAll('input[class^="stat-range-tvs"]');
    const tvsStatsNumber = document.querySelectorAll('input[class^="stat-tvs"]');
    updateTotalStatsData();
    const attacks = document.querySelectorAll('input[class^="attack-temtem"]');
    const gear = document.getElementById('gear-temtem');
    const wikiLink = document.getElementById('wiki-url');

    // Obtenemos el slot actual para luego poder corrsponder toda la informacion del temtem pertinente
    const slot = getCurrentSlot();

    inputName.value = slot.name;

    numberTemtem.innerHTML = slot.number;

    ability.value = slot.selectedAbility;

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

    i = 0;
    for (let stat in slot.tvs) {
        tvsStatsRange[i].value = slot.tvs[stat];
        tvsStatsNumber[i].value = slot.tvs[stat];
        i++;
    }

    i = 0;
    for (let attack in slot.actualTechniques) {
        attacks[i].value = slot.actualTechniques[attack][0];
        attacks[i].classList.replace(attacks[i].classList[1],`type-${slot.actualTechniques[attack][1]}`);
        attacks[i].setAttribute('title', `${slot.actualTechniques[attack][1]} type attack`);
        i++;
    }

    gear.value = slot.gear;

    wikiLink.setAttribute('href', slot.wikiUrl);

    // Ademas de actualizar toda la informacion en el teambuilder, agregamos la foto al boton para identificarlo mas facilmente
    const actualButton = document.querySelector('.actual-slot');
    actualButton.innerHTML = `<img src=${slot.portrait}>`;
}

// Creamos una funcion que habilitara los campos de las stats para editarlas siempre y cuando se haya elegido un TemTem antes
function enableEditingStats() {
    const ability = document.getElementById('ability-temtem');
    const tvsRange = document.querySelectorAll('input[class^="stat-range-tvs"]');
    const tvsStat = document.querySelectorAll('input[class^="stat-tvs"]');
    const attacks = document.querySelectorAll('input[class^="attack-temtem"]');
    const gear = document.getElementById('gear-temtem');

    const slot = getCurrentSlot();

    // En caso de que el TemTem ya haya sido elegido se podran modificar sus stats, en caso contrario se bloquearan
    if (slot.eneableEditingStats) {
        ability.removeAttribute('disabled');
        tvsRange.forEach(tvRange => {
            tvRange.removeAttribute('disabled');
        });
        tvsStat.forEach(tvStat => {
            tvStat.removeAttribute('readonly');
        });
        attacks.forEach(attack => {
            attack.removeAttribute('disabled');
        });
        gear.removeAttribute('disabled');
    } else {
        ability.setAttribute('disabled', '');
        tvsRange.forEach(tvRange => {
            tvRange.setAttribute('disabled', '');
            tvRange.value = 0;
        });
        tvsStat.forEach(tvStat => {
            tvStat.setAttribute('readonly', '');
            tvStat.value = 0;
        });
        attacks.forEach(attack => {
            attack.setAttribute('disabled', '');
        });
        gear.setAttribute('disabled', '');
    }
}

// Creamos una funcion para actualizar la informacion en el HTML del total de cada stat
function updateTotalStatsData() {
    const slot = getCurrentSlot();

    const statsTotal = document.querySelectorAll('.stat-total');

    i = 0;
    for (let stat in slot.total) {
        statsTotal[i].value = slot.total[stat];
        i++;
    }
}

// Creamos una funcion para actualizar la informacion del objeto de su stat final con toda la matematica implicada
function calculateTotalStat() {
    // Obtenemos un slot en particular
    const slot = getCurrentSlot();

    /** Hay en total 3 formulas para calcular las stats, una para el HP, otra para la STA y una tercera para las restantes, a continuacion se dispondra de las 3 formulas:
     * >>> HP :
     * (((1.5 x Base) + SV + (TV/5)) x Level)   (SV x Base x Level)
     * (------------------------------------) + (-----------------) + Level + 15
     * (                  80                )   (      20000      )
     * 
     * >>> STA :
     * (Base)                      (SV x Level x Base)   (TV x Level x Base)
     * (----) + (Level^0.35) x 6 + (-----------------) + (-----------------)
     * (  4 )                      (      20000      )   (      30000      )
     * 
     * >>> Resto de stats :
     * (((1.5 x Base) + SV + (TV/5)) x Level)   (SV x Base x Level)
     * (------------------------------------) + (-----------------) + 10
     * (                 100                )   (      25000      )
     * 
     * 'Level' = 100
     * 'SV' = 50
     * 'Base' = stat base
     * 'TV' = Tv actual (que son los que ingresan a esta funcion)
     * >>>TODOS LOS RESULTADOS SE REDONDEAN HACIA ABAJO<<<
     */

    for (let stat in slot.total) {
        if (stat === 'hp') {
            let value = (((1.5*slot.stats[stat])+50+(slot.tvs[stat]/5))*100/80)+(50*slot.stats[stat]*100/20000)+100+15;
            slot.total[stat] = Math.floor(value);
        } else if (stat === 'sta') {
            let value = (slot.stats[stat]/4)+(Math.pow(100,0.35))*6+(50*100*slot.stats[stat]/20000)+(slot.tvs[stat]*100*slot.stats[stat]/30000);
            slot.total[stat] = Math.floor(value);
        } else {
            let value = (((1.5*slot.stats[stat])+50+(slot.tvs[stat]/5))*100/100)+(50*slot.stats[stat]*100/25000)+10;
            slot.total[stat] = Math.floor(value);
        }
    }
}

// Creamos una funcion para actualizar los datos de los TVs en el objeto
function updateStatsData(input) {
    // Obtenemos un slot en particular
    const slot = getCurrentSlot();

    // Obtenemos la stat que se esta modificando gracias a las clases puestas
    const actualStat = input.classList[1];

    // Actualizamos la informacion con el dato actual
    slot.tvs[actualStat] = parseInt(input.value);
    
    // Actualizamos a su vez el calculo final del total de stats
    calculateTotalStat();
    updateTotalStatsData();
}

// Creamos una funcion para generar una mejor experiencia de usuario, que mostrara ciertos mensajes dependiendo del estado de la busqueda
function searcherLoadCleen(func) {    
    const explained = document.getElementById('search-explained');
    const result = document.querySelector('.search-result');
    const loader = document.getElementById('search-loader');
    
    if (func === 'start') {
        result.innerHTML = '';
        loader.innerHTML = '';
        explained.innerHTML = '<h3>Search results will appear here</h3>';
    } else if (func === 'load') {
        result.innerHTML = '';
        explained.innerHTML = '';
        loader.innerHTML = '<div class="loader"><div></div><div></div></div>';
    } else if (func === 'clear') {
        result.innerHTML = '';
        loader.innerHTML = '';
        explained.innerHTML = '';
    } else if (func === 'notexist') {
        result.innerHTML = '';
        loader.innerHTML = '';
        explained.innerHTML = '<h3>Not found or does not exist</h3>';
    } else if (func === 'repeat') {
        result.innerHTML = '';
        loader.innerHTML = '';
        explained.innerHTML = '<h3>Repeated attack, select another</h3>';
    }
}